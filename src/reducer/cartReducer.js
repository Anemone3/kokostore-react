import { usePayment } from "../hooks/usePayment";
import { typesCart } from "./typesCart";

export const cartReducer = (state, action) => {



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
      return state = [];
    }
    case typesCart.PAYMENT_CART:{
        /* 
        Los reducers no deben encargarse de lógica asincrónica ni de llamadas a APIs.
        El flujo de pago debe manejarse en un componente o en un contexto aparte
        */
    }
    default:
      return state;
  }
};
