const useCartReducer = () => {


    

  const addToCart = (product) => {
    console.log("Click add cart", { ...product });

    dispatch({
      type: typesCart.ADD_CART,
      payload: { ...product, quantity: 1 },
    });
  };

  const deleteToCart = (id) => {
    console.log("borrando el id" + id);

    dispatch({
      type: typesCart.DELETE_TO_CART,
      payload: id,
    });
  };

  const increment = (id) => {
    console.log("incrementando el id" + id);
    dispatch({
      type: typesCart.INCREMENT_CART,
      payload: id,
    });
  };

  const decremenet = (id) => {
    console.log("decrementando el id" + id);
    dispatch({
      type: typesCart.DECREMENT_CART,
      payload: id,
    });
  };
};
