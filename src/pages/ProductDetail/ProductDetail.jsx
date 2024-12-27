import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { ProductDetailEsqueleto } from "./ProductDetailEsqueleto";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { typesCart } from "../../reducer/typesCart";

const sizeProduct = ["S", "M", "L"];

export const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const [stateCantidad, setStateCantidad] = useState(1);
  const { cantidad, size, onInputChange, onResetForm } = useForm({
    cantidad: 1,
    size: "",
  });
  const { data, isLoading } = useFetch(
    `https://kokostore-express.onrender.com/products/${id}`
  );


  const addToCart = (product) => {
    console.log("Click add cart", { ...product });
    

    console.log("Cantidad", cantidad);

    dispatch({
      type: typesCart.ADD_CART,
      payload: { ...product, quantity: cantidad},
    });
  };

  return isLoading ? (
    <ProductDetailEsqueleto />
  ) : (
    <div className="flex justify-center items-center m-auto mt-20 py-10">
      {/* Contenedor principal con dos columnas */}
      <div className="w-full max-w-6xl px-6 flex flex-wrap lg:flex-nowrap">
        {/* Columna de la imagen */}
        <div className="flex-1 flex justify-center mb-6 lg:mb-0">
          <img
            src={data?.image_url}
            alt={data?.titulo}
            className="w-full max-w-sm h-auto object-contain shadow-lg rounded-lg"
          />
        </div>

        {/* Columna de detalles e información del producto */}
        <div className="flex-1 flex flex-col px-6 lg:px-8">
          <h2 className="text-pink-300 text-3xl font-semibold mb-2">
            {data?.titulo.toUpperCase()}
          </h2>
          <h4 className="text-gray-400 text-sm mb-4">{data?.name_category}</h4>

          {/* Stock y Precio */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500 text-base">
              Stock: <span className="text-pink-500">{data?.stock}</span>
            </p>
            <span className="text-pink-500 text-3xl font-bold">
              ${data?.price}
            </span>
          </div>

          {/* Descripción del producto */}
          <p className="text-gray-500 text-sm my-4">{data?.descripcion}</p>

          <div className="flex justify-between items-center">
            {/* Input para cantidad */}
            <div className="flex items-center space-x-4 ">
              <label className="text-pink-300 font-light text-sm">
                Cantidad
              </label>
              <input
                type="number"
                name="cantidad"
                value={Math.sign(cantidad) === 0 ? 1 : cantidad}
                onChange={onInputChange}
                className="w-16 text-center border border-gray-300 rounded-md py-1 text-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                size={4}
              />
            </div>
            {/* Selección de tamaño */}
            <div className="flex items-center ">
              <label className="text-pink-300 font-light text-sm">
                Seleccione un tamaño:
              </label>
              <select
                id="size"
                name="size"
                value={size}
                onChange={onInputChange}
                required
                className="w-1/3 text-center rounded-md border bg-gray-50 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                {sizeProduct.map((size, index) => (
                  <option
                    className="text-center  px-4 py-2 text-gray-400"
                    key={index}
                    value={size}
                  >
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón de acción */}
          <button
              onClick={() => addToCart(data)}
            className="w-full lg:w-auto mt-auto bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
