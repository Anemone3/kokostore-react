export const CartItem = ({
  product: { titulo, image_url, quantity, price, id },
  deleteToCart,
  increment,
  decremenet,
}) => {
  return (
    <div className="flex items-center gap-4 border-b border-gray-200 p-4">
      <img
        src={image_url}
        alt={titulo}
        className="h-20 w-20 rounded-md object-cover"
      />

      <div className="flex-1">
        <h3 className="text-lg font-medium">{titulo}</h3>
        <p className="text-gray-500">Price: ${Number(price).toFixed(2)}</p>
        <p className="text-gray-500">
          Total: ${(Number(price) * quantity).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => decremenet(id)}
          className="rounded-l-md bg-gray-200 px-2 py-1 text-gray-600 hover:bg-gray-300"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="bg-gray-100 px-3 py-1 text-gray-800">{quantity}</span>
        <button
          onClick={() => increment(id)}
          className="rounded-r-md bg-gray-200 px-2 py-1 text-gray-600 hover:bg-gray-300"
        >
          +
        </button>
      </div>

      <button
        onClick={() => {
          deleteToCart(id);
        }}
        className="ml-4 rounded-md bg-red-500 p-2 text-white transition hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};
