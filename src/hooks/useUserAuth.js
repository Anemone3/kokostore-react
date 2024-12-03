import { useCallback, useEffect, useState } from "react";

const url_login = "https://kokostore-express.onrender.com/users/login";

export const useUserAuth = () => {
  const [userAuth, setUserAuth] = useState({
    isLogged: false,
    token: null,
    error: null,
    dataUser: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (token && userData) {
      setUserAuth({
        isLoggedIn: true,
        token: token,
        userData: userData,
        error: null,
      });
    }
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      const response = await fetch(url_login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: email, password: password }),
      });

      const data = await response.json();
      console.log("respuesta del login: ", data);

      if (response.ok) {
        const {
          session: { access_token, user:{user_metadata} },
        } = data;

        localStorage.setItem("auth_token", access_token);
        localStorage.setItem("userData", JSON.stringify(user_metadata));

        setUserAuth({
          isLogged: true,
          token: access_token,
          dataUser: user_metadata,
          error: null,
        });
      } else {
        setUserAuth({
          dataUser: null,
          token: null,
          isLogged: false,
          error: "No existe ninguna session disponible",
        });
      }
    } catch (error) {
      setUserAuth((prevState) => ({
        ...prevState,
        error: "Error al intentar iniciar sesión.",
      }));
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("userData");
    setUserAuth({
      isLoggedIn: false,
      token: null,
      userData: null,
      error: null,
    });
  }, []);

  return {
    userAuth,
    login,
    logout,
  };
};
