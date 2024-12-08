import { use } from "react";
import { useForm } from "../../../hooks/useForm";

export const RegisterUser = ({ setSelectedTab, register, login }) => {
  const {
    formState,
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
    const data = await register(
      firstname,
      lastname,
      correo,
      telefono,
      direccion,
      password,
    );

    await login(correo, password);
    onResetForm();
    console.log("Registro completado", data);
  };

  return (
    <div className="mt-5 flex items-center justify-center">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Register
        </h2>
        <form className="w-full" onSubmit={handleRegister}>
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
              <option value="1">Departamento 1</option>
              <option value="2">Departamento 2</option>
              <option value="13">Lima</option>
              <option value="dep4">Departamento 4</option>
              {/* Puedes agregar más departamentos aquí */}
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
