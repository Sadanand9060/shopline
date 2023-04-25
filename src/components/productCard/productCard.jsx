import React from "react";
import { NavLink } from "react-router-dom";
import "./productCard.css";
const ProductCard = (props) => {
  return (
    <NavLink
      to={`/products/${props.prod.id}`}
      className="card productCard"
      style={{ width: "18rem" }}
      key={props.prod.id}
    >
      <img
        src={props.prod.image}
        className="card-img-top"
        alt={props.prod.title}
      />
      <div className="card-body cardDesc">
        <h5 className="card-title">{props.prod.title.substring(0, 12)}</h5>
        <p className="card-text prodPrice">Rs.{Math.ceil(props.prod.price * 85)}</p>
      </div>
      <div className="btn btn-primary prodBuy">Buy Now</div>
    </NavLink>
  );
};

export default ProductCard;
