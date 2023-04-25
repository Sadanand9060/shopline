import "./products.css";
import { React, useState, useEffect } from "react";
import Loading from "../loading/loading";
import ProductCard from "../productCard/productCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      setProducts(await res.clone().json());
      setFilterProducts(await res.json());
      console.log(products);
      setLoading(false);
    };
    getProducts();
  }, [products]);

  const filterAccToCategory = (category) => {
    const updatedProducts = products.filter(
      (product) => product.category === category
    );
    setFilterProducts(updatedProducts);
  };

  return (
    <div>
      <div className="productCategory">
        <div onClick={() => setFilterProducts(products)}>All</div>
        <div onClick={() => filterAccToCategory("women's clothing")}>Women</div>
        <div onClick={() => filterAccToCategory("men's clothing")}>Men</div>
        <div onClick={() => filterAccToCategory("electronics")}>
          Electronics
        </div>
        <div onClick={() => filterAccToCategory("jewelery")}>Jewelery</div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="prodContainer">
            {filterProducts.map((prod) => {
              return <ProductCard prod={prod} key={prod.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
