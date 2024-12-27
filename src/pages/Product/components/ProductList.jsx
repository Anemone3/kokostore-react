import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { typesCart } from "../../../reducer/typesCart";

export const ProductList = ({ product, handleViewDetails }) => {
  const { dispatch } = useContext(CartContext);
  const { id, titulo, descripcion, price, ingredientes, image_url } = product;

  const addToCart = (product) => {
    console.log("Click add cart", { ...product });

    dispatch({
      type: typesCart.ADD_CART,
      payload: { ...product, quantity: 1 },
    });
  };

  return (
    <div className="flex flex-col rounded-xl bg-white shadow-lg transition-transform duration-200">
      <img
        src={image_url}
        alt={titulo}
        className="h-40 w-full rounded-t-xl object-cover"
      />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 line-clamp-1 text-base font-bold text-gray-900">
          {titulo}
        </h3>
        <p className="text-lg font-semibold text-pink-500">${price}</p>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{descripcion}</p>
        <ul className="mt-2 list-disc pl-5 text-xs text-gray-500">
          <li>{ingredientes}</li>
        </ul>
        <div className="mt-auto flex w-full justify-between">
          <button
            onClick={() => handleViewDetails(id)}
            className="mr-3 w-full rounded-lg bg-pink-500 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-pink-600"
          >
            Show Details
          </button>

          <button
            onClick={() => addToCart(product)}
            className="flex w-3/12 items-center justify-center rounded-lg bg-pink-500 transition-all duration-300 hover:scale-105 hover:bg-pink-600"
          >
            <ShoppingCartIcon className="text-sm text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
