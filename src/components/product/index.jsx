import React from "react";
import { useDispatch } from "react-redux";
import { addItemToUserCart } from "../../store/user";
import Stars from "../common/stars";
import "./index.css";

const Product = ({ id, title, price, rating, image }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addItemToUserCart(id));
  };

  return (
    <article className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <Stars className="product__rating" stars={rating} />
      </div>

      <img className="product__img" src={image} alt="Product" />

      <button className="product__btn" onClick={handleAddToBasket}>
        Add to basket
      </button>
    </article>
  );
};

export default Product;
