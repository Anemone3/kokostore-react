import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { departamentosPeru } from "./departamentos";
import { useNavigate } from "react-router-dom";

export const RegisterUser = ({ userAuth, setSelectedTab, register, login }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();
  const {
    onInputChange,
    onResetForm,
    firstname,
    lastname,
    correo,
    telefono,
    direccion,
    departamento,
    password,
  } = useForm({
    firstname: "",
    lastname: "",
    correo: "",
    telefono: "",
    direccion: "",
    departamento: "",
    password: "",
  });

  const handleRegister = async (event) => {
    event.preventDefault();

    if (
      !firstname ||
      !lastname ||
      !correo ||
      !telefono ||
      !direccion ||
      !departamento ||
      !password
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("correo", correo);
    formData.append("telefono", telefono);
    formData.append("direccion", direccion);
    formData.append("password", password);
    formData.append("departamento", departamento);

    if (profilePicture) {
      formData.append("file", profilePicture);
    }

    await register(formData);

    if (!userAuth.error) {
      console.log("login after register")
      await login(correo, password);
      if (userAuth.isLogged) {
        navigate("/profile");
      }
    }

    onResetForm();
    setProfilePicture(null);
  };

  return (
    <div className="mt-5 flex items-center justify-center">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Register
        </h2>
        <form className="w-full" onSubmit={handleRegister} autoComplete="off">
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-600"
              >
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={onInputChange}
                required
                className="w-full rounded-md border border-pink-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-600"
              >
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={onInputChange}
                required
                className="w-full rounded-md border border-pink-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>

          <div className="mb-6">
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
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={onInputChange}
              required
              className="w-full rounded-md border border-pink-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="direccion"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={direccion}
              onChange={onInputChange}
              required
              className="w-full rounded-md border border-pink-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="departamento"
              className="block text-sm font-medium text-gray-600"
            >
              Departamento
            </label>
            <select
              id="departamento"
              name="departamento"
              value={departamento}
              onChange={onInputChange}
              required
              className="w-full rounded-md border border-pink-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value="">Seleccione un departamento</option>
              {departamentosPeru.map((departamento) => (
                <option key={departamento} value={departamento}>
                  {departamento}
                </option>
              ))}
            </select>
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

          {/* Campo para imagen */}
          <div className="mb-6">
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-600"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              className="w-full rounded-md border border-pink-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          {
            <div className="mb-4 text-right text-sm text-pink-800">
              {userAuth && userAuth?.error}
            </div>
          }
          <button
            type="submit"
            className="w-full rounded-md bg-pink-300 py-2 text-white hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            onClick={() => setSelectedTab(true)}
            className="cursor-pointer text-pink-300"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
