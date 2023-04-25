const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist1 = state.find((item) => item.id === product.id);
      if (exist1) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case "DELITEM":
      const exist2 = state.find((item) => item.id === product.id);
      if (exist2 && exist2.qty === 1) {
        return state.filter((item) => item.id !== exist2.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    default:
      return state;
  }
};


export default handleCart;

