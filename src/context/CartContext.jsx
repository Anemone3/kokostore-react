import { createContext, useReducer } from "react";
import { typesCart } from "./typesCart";

//1.- Crear el contexto
export const CartContext = createContext();
//Mi carrito inicial
const initialState = [];

//Mi reducer
const reducer = (state, action) => {
  //el type y payload que se envia con el dispatch
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case typesCart.ADD_CART: {
      /* El actionPayload seria el payload que envie, osea mi producto */
      const { id } = actionPayload;
      /* El state seria mi array cart */
      const productInCart = state.findIndex((item) => item.id === id);

      if (productInCart >= 0) {
        return state.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 } // Incrementa la cantidad
            : item,
        );
      }

      return [...state, { ...actionPayload, quantity: 1 }];
    }
    case typesCart.DELETE_TO_CART: {
      const id = actionPayload;

      return state.filter((item) => item.id !== id);
    }
    case typesCart.INCREMENT_CART: {
      const id = actionPayload;

      const cart = state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );

      return cart;
    }
    case typesCart.DECREMENT_CART: {
      const id = actionPayload;

      const cart = state.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );

      return cart;
    }
    case typesCart.CLEAR_CART: {
    }
    default:
      return state;
  }
};

//2.- El provider
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);

  const totalCart = cart
    ? cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
    : 0;

  return (
    <CartContext.Provider value={{ cart, dispatch, totalCart }}>
      {children}
    </CartContext.Provider>
  );
};
