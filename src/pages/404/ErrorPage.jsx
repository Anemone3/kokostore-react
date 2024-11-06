import { useRouteError } from "react-router-dom";

export  function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center"
    >
      <h1 className="mb-4 text-6xl font-bold text-gray-800">Oops!</h1>
      <p className="mb-2 text-lg text-gray-600">
        Lo sentimos, ha ocurrido un error inesperado.
      </p>
      <p className="italic text-gray-500">
        {error?.statusText || error?.message || "Error desconocido"}
      </p>
    </div>
  );
}
