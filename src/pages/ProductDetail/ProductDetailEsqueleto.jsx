import React from "react";

export const ProductDetailEsqueleto = () => {
  return (
    <div className="flex justify-center items-center m-auto mt-20 py-10">
      {/* Contenedor principal con dos columnas */}
      <div className="w-full max-w-6xl px-6 flex flex-wrap lg:flex-nowrap">
        {/* Columna de la imagen */}
        <div className="flex-1 flex justify-center mb-6 lg:mb-0">
          <div className="w-[384px] h-[384px] bg-gray-300 animate-pulse rounded-lg"></div>
        </div>

        {/* Columna de detalles e información del producto */}
        <div className="flex-1 flex flex-col px-6 lg:px-8">
          <div className="mb-2 bg-gray-300 animate-pulse w-3/4 h-6 rounded"></div>
          <div className="mb-4 bg-gray-300 animate-pulse w-1/2 h-4 rounded"></div>

          {/* Stock y Precio */}
          <div className="flex justify-between items-center mb-4">
            <div className="bg-gray-300 animate-pulse w-32 h-4 rounded"></div>
            <div className="bg-gray-300 animate-pulse w-24 h-8 rounded"></div>
          </div>

          {/* Descripción del producto */}
          <div className="bg-gray-300 animate-pulse w-full h-20 rounded mb-4"></div>

          {/* Contenedor para cantidad y tamaño */}
          <div className="flex justify-between items-center">
            {/* Input para cantidad */}
            <div className="flex items-center space-x-4 mb-5">
              <div className="bg-gray-300 animate-pulse w-24 h-6 rounded"></div>
              <div className="bg-gray-300 animate-pulse w-16 h-8 rounded"></div>
            </div>

            {/* Selección de tamaño */}
            <div className="mb-5">
              <div className="bg-gray-300 animate-pulse w-full h-10 rounded"></div>
            </div>
          </div>

          {/* Botón de acción */}
          <div className="bg-gray-300 animate-pulse w-full lg:w-auto mt-auto h-12 rounded"></div>
        </div>
      </div>
    </div>
  );
};
