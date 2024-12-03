import { useForm } from "../../../hooks/useForm"
import { useAuth } from "../../../context/AuthContext/AuthProvider";


export const AuthComponent = () => {


    const { userAuth, login, logout} = useAuth();

    const { formState, onInputChange, onResetForm,correo, password } = useForm({ correo: "", password: "" });
    //const {correo,password} = formState;
    const handleSignUp = async(event) =>{

        event.preventDefault();

        if (!correo || !password) {
            alert('Por favor, ingresa un correo y una contraseña.');
            return;
        }
        await login(correo, password);
        onResetForm();
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex bg-white rounded-lg w-2/3 max-w-4xl">
                {/* Contenedor del formulario */}
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Iniciar sesión</h2>
                    <form className="space-y-6" onSubmit={handleSignUp}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="correo"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                    value={correo}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                    value={password}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 focus:outline-none"
                            >
                                Sign In
                            </button>
                            {userAuth.error && <p className="text-red-500 mt-2">{userAuth.error}</p>}
                        </div>
                    </form>
                </div>

                {/* Contenedor de la imagen */}
                <div className="flex-1 bg-cover bg-center rounded-tr-lg rounded-br-lg" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
                    {/* Este es el espacio para la imagen */}
                    {userAuth && JSON.stringify(userAuth.dataUser.email)}
                </div>
            </div>
        </div>
    )
}
