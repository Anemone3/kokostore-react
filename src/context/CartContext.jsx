import { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";

//1.- Crear el contexto
export const CartContext = createContext();
const initialState = [];
//2.- El provider
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const totalCart = cart
    ? cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
    : 0;

  return (
    <CartContext.Provider value={{ cart, dispatch, totalCart }}>
      {children}
    </CartContext.Provider>
  );
};
