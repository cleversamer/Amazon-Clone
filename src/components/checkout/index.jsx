import React from "react";
import { useSelector } from "react-redux";
import { getUserCart } from "../../store/user";
import CheckoutProduct from "./CheckoutProduct";
import "./index.css";

const Checkout = () => {
  const cart = useSelector(getUserCart);

  const parseCartItems = () => {
    const result = [];
    cart.titles.forEach((title) => {
      result.push(cart[title]);
    });

    return result;
  };

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="Advertisement cover"
      />

      {cart?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is empty</h2>
          <p>You have no items in your shopping cart.</p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {parseCartItems().map(({ item, length }) => (
            <CheckoutProduct key={item.title} item={item} count={length} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
