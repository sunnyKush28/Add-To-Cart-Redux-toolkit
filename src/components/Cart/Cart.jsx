import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Cart = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  console.log(totalQuantity);
  return (
    <div className="bag">
      <div className="navigation">
        <Link to="/">
          <IoArrowBackOutline className="arrow" /> <b>Home</b>
        </Link>
      </div>
      <Link to="/shopingcart" className="cart">
        <FaCartArrowDown size={30} />
        <p className="itemsInCart">{totalQuantity}</p>
      </Link>
    </div>
  );
};

export default Cart;
