import React from "react";
import { useSelector } from "react-redux";
import { getUserCart } from "../../store/user";
import "./index.css";

const Checkout = () => {
  const cart = useSelector(getUserCart);

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
        </div>
      ) : (
        <div>
          <h2>Your Shopping Cart</h2>
        </div>
      )}

      <h1>Test</h1>
    </div>
  );
};

export default Checkout;
