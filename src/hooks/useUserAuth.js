import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const url_login = "https://kokostore-express.onrender.com/users/login";
const url_register = "https://kokostore-express.onrender.com/users/register";
// users/{id:supabase}
const url_getUser = "https://kokostore-express.onrender.com/users/";

export const useUserAuth = () => {
  const navigate = useNavigate();

  const [userAuth, setUserAuth] = useState({
    isLogged: false,
    token: null,
    error: null,
    id: null,
    dataUser: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (token && userData) {
      setUserAuth({
        isLogged: true,
        token: token,
        dataUser: userData,
        id: userData.supabase_user_id,
        error: null,
      });
    }
  }, []);

  useEffect(() => {
    if (userAuth.token && userAuth.id && !userAuth.dataUser) {
      fetchUser();
    }
  }, [userAuth.token]);

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
          session: {
            access_token,
            user: { id },
          },
        } = data;

        localStorage.setItem("auth_token", access_token);

       

        setUserAuth({
          isLogged: true,
          token: access_token,
          dataUser: null,
          id: id,
          error: null,
        });

        navigate("/");
      } else {
        setUserAuth({
          dataUser: null,
          token: null,
          isLogged: false,
          id: null,
          error: data.error,
        });
      }
    } catch (error) {
      setUserAuth((prevState) => ({
        ...prevState,
        error: "Error al intentar iniciar sesión.",
      }));
    }
  }, []);

  const register = useCallback(async (formData) => {
    try {
      const response = await fetch(url_register, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.status === 201) {
        const { user } = data;
        setUserAuth({
          isLogged: false,
          token: null,
          id: user.id,
          dataUser: null,
          error: null,
        });
      }
      if (response.status === 400) {
        setUserAuth({
          isLogged: false,
          token: null,
          id: null,
          dataUser: null,
          error: data.error,
        });
      }
    } catch (error) {
      setUserAuth((prevState) => ({
        ...prevState,
        error: "Error al registrarse.",
      }));

    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("userData");
    setUserAuth({
      isLoggedIn: false,
      token: null,
      id: null,
      dataUser: null,
      error: null,
    });

    navigate("/");
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `https://kokostore-express.onrender.com/users/${userAuth.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userAuth.token}`,
          },
        },
      );

      const data = await response.json();


      const { user } = data;


      if (response.ok) {
        localStorage.setItem("userData", JSON.stringify(user));
        setUserAuth({
          isLogged: true,
          token: userAuth.token,
          id: user.id,
          dataUser: user,
          error: null,
        });
      } else {
        setUserAuth({
          dataUser: null,
          token: null,
          isLogged: false,
          error: data.error,
        });
      }
    } catch (error) {

      setUserAuth((prevState) => ({
        ...prevState,
        error: "Error al obtener los datos del usuario.",
      }));
    }



  };

  const getToken = ()=>{
    
    
    return userAuth.token;
  }

  return {
    user: userAuth.dataUser,
    login: login,
    register: register,
    logout: logout,
    userAuth: userAuth,
    getToken: getToken,
  };
};
