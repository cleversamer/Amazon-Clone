import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromUserCart,
  reduceItemFromUserCart,
} from "../../store/user";
import Stars from "../common/stars";

const CheckoutProduct = ({ item, count }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItemFromUserCart(item.title));
  };

  const handleReduce = () => {
    dispatch(reduceItemFromUserCart(item.title));
  };

  return (
    <div className="checkout__product">
      <img className="checkout__product-img" src={item.image} alt="Product" />

      <div className="checkout__product-info">
        <div>
          <p className="checkout__product-title">{item.title}</p>
          <p className="checkout__product-price">
            <small>$</small>
            <strong>{item.price}</strong>
          </p>

          <Stars className="checkout__product-rating" stars={item.rating} />
          <p className="checkout__product-count">
            <span>Count: {count}</span>
            <button className="checkout__product-min" onClick={handleReduce}>
              -
            </button>
          </p>
        </div>

        <button className="checkout__product-remove" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
