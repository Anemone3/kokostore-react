import { useContext } from "react";

import { CartItem } from "./CartItem";
import { CartContext } from "../../context/CartContext";
import { typesCart } from "../../context/typesCart";
import { PaymentCart } from "./PaymentCart";

export const Cart = () => {
  const { cart, dispatch, totalCart } = useContext(CartContext);

  const deleteToCart = (id) => {
    console.log('borrando el id' + id);
    
    dispatch({
      type: typesCart.DELETE_TO_CART,
      payload: id,
    });
  };

  const increment = (id) => {
    console.log('incrementando el id' + id);
    dispatch({
      type: typesCart.INCREMENT_CART,
      payload: id,
    });
  };

  const decremenet = (id) => {
    console.log('decrementando el id' + id);
    dispatch({
      type: typesCart.DECREMENT_CART,
      payload: id,
    });
  };

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-gray-100 p-6 lg:flex-row">
      <div className="flex-1 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Your Cart</h2>

        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((producto) => (
              <CartItem key={producto.id} product={producto} increment={increment} decremenet={decremenet} deleteToCart={deleteToCart}/>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
        <PaymentCart total={totalCart}/>
    </div>
  );
};
