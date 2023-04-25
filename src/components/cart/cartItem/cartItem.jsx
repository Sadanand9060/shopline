import React from "react";
import { useDispatch } from "react-redux";
import { delFromCart } from "../../../redux/action/action";
import StarIcon from "@mui/icons-material/Star";
import "./cartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const removeFromcart = () => {
    dispatch(delFromCart(product));
  };

  return (
    <div className="cartproductScreenProdContainer">
      <div className="cartprodScreenLeftPart">
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="itemSelect"
        >
          <img
            src={product.image}
            alt="prodImage"
            className="cartprodScreenImage"
          />
        </Link>
      </div>
      <div className="cartprodScreenRightPart">
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="itemSelect"
        >
          <span className="cartProdScreenTitle">{product.title}</span>
        </Link>

        <div className="cartproductRatingAndUserRated">
          <span className="cartprodRating">
            <StarIcon sx={{ fontSize: 20 }} />
            <span>
              {product ? (product.rating ? product.rating.rate : "NA") : "NA"}
            </span>
          </span>
          <span className="cartprodRatedByUsers">
            {product ? (product.rating ? product.rating.count : "NA") : "NA"}
          </span>
        </div>
        <div className="cartpriceOfProductInProductScreen">
          Rs. {Math.ceil(product.price * 85)}
        </div>
      </div>
      <div className="cartOptns">
        <div className="cartoptn">Buy Now</div>
        <div className="cartoptn remo" onClick={() => removeFromcart(product)}>
          Remove
        </div>
      </div>
    </div>
  );
};

export default CartItem;
