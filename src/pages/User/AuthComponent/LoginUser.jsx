import { useForm } from "../../../hooks/useForm";

export const LoginUser = ({ userAuth, setSelectedTab }) => {
  const { formState, onInputChange, onResetForm, correo, password } = useForm({
    correo: "example@email.com",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!correo || !password) {
      alert("Por favor, ingresa un correo y una contraseña.");
      return;
    }

    await login(correo, password);
    onResetForm();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
            type="submit"
            className="w-full rounded-md bg-pink-300 py-2 text-white hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a onClick={() => setSelectedTab(false)} className="text-pink-300">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
