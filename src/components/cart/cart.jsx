import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./cartItem/cartItem";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  return (
    <div>
      {cartState.length > 0 ? (
        cartState.map((item) => {
          return <CartItem product={item} key={item.id} />;
        })
      ) : (
        <h1>Your cart is empty, Add items to cart!</h1>
      )}
    </div>
  );
};

export default Cart;
