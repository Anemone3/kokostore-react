export const ProductList = ({
titulo,
  descripcion,
  price,
  ingredientes,
  image_url,
}) => {

 

  return (
    <div className="flex flex-col rounded-xl bg-white shadow-lg transition-transform duration-200 ">
      <img
        src={image_url}
        alt={titulo}
        className="h-40 w-full rounded-t-xl object-cover"
      />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 text-base font-bold text-gray-900 mb-1">
          {titulo}
        </h3>
        <p className="text-lg font-semibold text-pink-500">${price}</p>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{descripcion}</p>
        <ul className="mt-2 text-xs text-gray-500 list-disc pl-5">
          <li>{ingredientes}</li>
        </ul>
        <button className="mt-auto w-full rounded-lg bg-pink-500 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-pink-600 hover:scale-105">
          Agregar al carrito
        </button>
      </div>
    </div>
  )
};
