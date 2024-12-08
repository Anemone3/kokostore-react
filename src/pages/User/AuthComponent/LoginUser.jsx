import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { Loader } from "lucide-react";

export const LoginUser = ({ login, setSelectedTab, userAuth }) => {
  const { formState, onInputChange, onResetForm, correo, password } = useForm({
    correo: "ateshi.baqua13@aquacrew.com",
    password: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!correo || !password) {
      alert("Por favor, ingresa un correo y una contraseña.");
      return;
    }

    await login(correo, password);
    onResetForm();
  };

  const handleClicked = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  };

  return (
    <div className="mt-5 flex items-center justify-center">
      <div className="w-full max-w-sm p-6">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={correo}
              onChange={onInputChange}
              required
              className="w-full rounded-md border border-pink-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onInputChange}
              required
              className="w-full rounded-md border border-pink-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <button
            onClick={handleClicked}
            type="submit"
            className="w-full  rounded-md bg-pink-300 py-2 text-white hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            {isClicked ? (
              <div className="flex items-center justify-center">
                <Loader className="h-6 w-6 animate-spin text-pink-500" />
              </div>
            ) : (
              "Login"
            )}
          </button>
          {userAuth.error && (
            <p className="mt-2 text-right text-sm text-gray-600">
              {userAuth?.error}
            </p>
          )}
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            onClick={() => setSelectedTab(false)}
            className="cursor-pointer text-pink-300"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
