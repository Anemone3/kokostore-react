import { Loader } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader className="h-8 w-8 animate-spin text-pink-500" />
        <p className="text-gray-600">Cargando productos...</p>
      </div>
    </div>
  );
};
