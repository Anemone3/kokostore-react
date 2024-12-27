import { useAuth } from "../../context/AuthContext/AuthProvider";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProfileUser = () => {
  const { userAuth,user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/profile/${user.supabase_user_id}`, { replace: true });
    }
  }, [navigate, user]);

  if (!user) {
    return <Loading text={"Cargando"} />; // Mostrar un mensaje mientras el usuario no esté disponible
  }

  const {
    correo,
    created_at,
    departamento,
    direccion,
    estado,
    firstname,
    lastname,
    profile_url,
    role,
    supabase_user_id,
    telefono,
    updated_at,
  } = user;

  // Función para formatear fecha
  const formatDate = (date) => {
    return date.split("T")[0]; // Devuelve la fecha en formato 'YYYY-MM-DD'
  };

  return (
    <div className="min-h-screen w-full flex-col gap-6 bg-gray-100 p-6 lg:flex-row">
      <div className="flex min-h-screen flex-col items-center bg-gray-100 py-10">
        {/* Header */}
        <div className="flex w-full max-w-screen-xl items-center justify-between border-b border-gray-300 px-5 py-3">
          <h1 className="text-3xl font-semibold text-gray-900">Perfil</h1>
          <button className="text-xl text-pink-500">Editar Perfil</button>
        </div>

        {/* Perfil Info */}
        <div className="flex w-full max-w-4xl flex-col items-center px-5 py-5">
          <div className="relative">
            {/* Foto de perfil */}
            <img
              src={
                profile_url ||
                "https://avatars.akamai.steamstatic.com/082ef5b418f2c0491ea318a18ea78012ed761899_full.jpg"
              }
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
            />
            {/* Icono de editar foto */}
            <button className="absolute bottom-0 right-0 rounded-full bg-white p-2 text-pink-500 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.121 4.121a2 2 0 112.828 2.828L8.828 14l-2.829 7.07a2 2 0 01-2.828 2.828l-2-2a2 2 0 01-.707-2.828L9.828 14l7.072-7.071z"
                />
              </svg>
            </button>
          </div>

          {/* Información de usuario */}
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {firstname + " " + lastname}
            </h2>
            <p className="text-sm text-gray-600">@{correo.split("@")[0]}</p>

            {/* Estadísticas */}
            <div className="mt-4 flex justify-center space-x-8">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">120</p>
                <p className="text-sm text-gray-500">Seguidores</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">80</p>
                <p className="text-sm text-gray-500">Siguiendo</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">50</p>
                <p className="text-sm text-gray-500">Publicaciones</p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="mt-4 flex space-x-4">
              <button className="rounded-full bg-pink-500 px-6 py-2 font-semibold text-white hover:bg-pink-600">
                Seguir
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-800 hover:bg-gray-200">
                Mensaje
              </button>
            </div>

            {/* Biografía */}
            <div className="mt-5 text-center text-gray-700">
              <p>
                Miembro desde: {formatDate(created_at)}
                <br />
                Teléfono: {telefono}
              </p>
            </div>
          </div>
        </div>

        {/* Feed de Videos */}
        <div className="w-full max-w-screen-xl px-5 py-5">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Videos</h2>
          <div className="grid grid-cols-3 gap-4">
            {["video1", "video2", "video3"].map((video, index) => (
              <div
                className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-300"
                key={index}
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Video+${index + 1}`}
                  alt={`Video ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <button className="absolute bottom-3 right-3 rounded-full bg-black p-2 text-white opacity-75 hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
