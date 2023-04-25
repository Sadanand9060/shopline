import React from "react";
import "./home.css";
import Products from "../products/products";
import Carousel from "../carousel/carousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="homePageProductsContainer">
        <span className="homeProductsHeading">Available Products</span>
        <Products />
      </div>
    </>
  );
};

export default Home;
