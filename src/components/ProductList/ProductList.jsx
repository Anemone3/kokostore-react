import React from "react";

export const ProductList = ({titulo,descripcion,price,ingredientes,image_url}) => {
  return (
    <>
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 class="mb-2 text-lg font-semibold text-gray-800">
          {titulo}
        </h3>
              <p class="text-gray-600">{descripcion}</p>
              <img src={image_url} alt={titulo} className="w-40 rounded-2xl"/>
        <button class="mt-4 rounded-lg bg-purple-200 px-4 py-2 text-gray-800 hover:bg-yellow-300">
          Ordenar
        </button>
      </div>
    </>
  );
};
