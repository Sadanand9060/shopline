export const addToCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delFromCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};


export const addToWishlist = (product) => {
  return {
    type: "ADDITEMTOWISHLIST",
    payload: product,
  };
};

export const delFromWishlist = (product) => {
  return {
    type: "DELITEMFROMWISHLIST",
    payload: product,
  };
};