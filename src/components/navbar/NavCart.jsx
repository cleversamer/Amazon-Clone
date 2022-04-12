import React from "react";
import { useSelector } from "react-redux";
import { getUserCart } from "../../store/user";
import { ShoppingBasket } from "@mui/icons-material";

const NavCart = () => {
  const cart = useSelector(getUserCart);

  const mapItems = () => {
    const result = parseInt(cart?.length);
    return isNaN(result) ? 0 : result;
  };

  return (
    <div className="navbar__cart">
      <ShoppingBasket />
      <span className="navbar__cart-count">{mapItems()}</span>
    </div>
  );
};

export default NavCart;
