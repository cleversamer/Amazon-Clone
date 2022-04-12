import React from "react";
import { useDispatch } from "react-redux";
import { addItemToUserCart } from "../../store/user";
import Stars from "../common/stars";
import "./index.css";

const Product = ({ id, item }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addItemToUserCart(item));
  };

  return (
    <article className="product">
      <div className="product__info">
        <p className="product__title">{item.title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{item.price}</strong>
        </p>

        <Stars className="product__rating" stars={item.rating} />
      </div>

      <img className="product__img" src={item.image} alt="Product" />

      <button className="product__btn" onClick={handleAddToBasket}>
        Add to Cart
      </button>
    </article>
  );
};

export default Product;
