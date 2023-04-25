import { React, useState, useEffect } from "react";
import Loading from "../loading/loading";
import ProductCard from "../productCard/productCard";
import "./category.css";

const Category = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    const getProducts = async () => {
      setLoading("true");
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${props.category}`
      );
      setProducts(await res.json());
      setLoading(false);
    };
    getProducts();
  }, [props.category]);

  return (
    <div className="categoryPage">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="categoryHeading">{props.category.toUpperCase()}</h1>
          <div className="prodContainer">
            {products.map((prod) => {
              return <ProductCard prod={prod} key={prod.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
