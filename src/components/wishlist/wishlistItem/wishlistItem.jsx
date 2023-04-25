import React from "react";
import "./wishlistItem.css";
import { useDispatch } from "react-redux";
import { delFromWishlist } from "../../../redux/action/action";
import { addToCart } from "../../../redux/action/action";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const WishlistItem = ({ product }) => {
  const dispatch = useDispatch();

  const removeFromWishlist = () => {
    dispatch(delFromWishlist(product));
  };

  const addInCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="wishlistproductScreenProdContainer">
      <div className="wishlistprodScreenLeftPart">
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="itemSelect"
        >
          <img
            src={product.image}
            alt="prodImage"
            className="wishlistprodScreenImage"
          />
        </Link>
      </div>
      <div className="wishlistprodScreenRightPart">
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="itemSelect"
        >
          <span className="wishlistProdScreenTitle">{product.title}</span>
        </Link>

        <div className="wishlistproductRatingAndUserRated">
          <span className="wishlistprodRating">
            <StarIcon sx={{ fontSize: 20 }} />
            <span>
              {product ? (product.rating ? product.rating.rate : "NA") : "NA"}
            </span>
          </span>
          <span className="wishlistprodRatedByUsers">
            {product ? (product.rating ? product.rating.count : "NA") : "NA"}
          </span>
        </div>
        <div className="wishlistpriceOfProductInProductScreen">
          Rs. {Math.ceil(product.price * 85)}
        </div>
      </div>
      <div className="wishlistOptns">
        <div className="wishoptn" onClick={() => addInCart(product)}>
          Add to Cart
        </div>
        <div
          className="wishoptn remo"
          onClick={() => removeFromWishlist(product)}
        >
          Remove
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
