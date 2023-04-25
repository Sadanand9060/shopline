import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../redux/action/action.js";
import Loading from "../loading/loading";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./productScreen.css";

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  const addProductToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProducts();
  }, [id]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="productScreenProdContainer">
            <div className="prodScreenLeftPart">
              <img
                src={product.image}
                alt="prodImage"
                className="prodScreenImage"
              />
            </div>
            <div className="prodScreenRightPart">
              <span className="ProdScreenTitle">{product.title}</span>
              <div className="productRatingAndUserRated">
                <span className="prodRating">
                  <StarIcon sx={{ fontSize: 20 }} />
                  <span>
                    {product
                      ? product.rating
                        ? product.rating.rate
                        : "NA"
                      : "NA"}
                  </span>
                </span>
                <span className="prodRatedByUsers">
                  {product
                    ? product.rating
                      ? product.rating.count
                      : "NA"
                    : "NA"}
                </span>
              </div>
              <div className="priceOfProductInProductScreen">
                Rs. {Math.ceil(product.price * 85)}
              </div>
              <div className="optionsForProduct">
                <div
                  className="addToCartProdScreen"
                  onClick={() => addProductToCart(product)}
                >
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
                  <span>Add To Cart</span>
                </div>
                <div
                  className="wishListProductInProductScreen"
                  onClick={() => addProductToWishlist(product)}
                >
                  <FavoriteBorderIcon sx={{ fontSize: 25 }} />
                  <span>Wishlist</span>
                </div>
              </div>
              <div className="productDetailsInProductScreen">
                {product.description}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
