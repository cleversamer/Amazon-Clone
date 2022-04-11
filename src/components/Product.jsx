import React from "react";
import { genKey } from "../services";
import "../css/product.css";

const Product = ({ id, title, price, rating, image }) => {
  return (
    <article className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p key={genKey()}>⭐</p>
            ))}
        </div>
      </div>

      <img className="product__img" src={image} alt="Product" />

      <button className="product__btn">Add to basket</button>
    </article>
  );
};

export default Product;
