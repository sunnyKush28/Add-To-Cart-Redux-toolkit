import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../features/cart/cartSlices";

const CartTotal = () => {
  const Total = useSelector((state) => state.cart);

  const dispatch = useDispatch(); // Get the dispatch function

  const handleClear = () => {
    dispatch(clearCart()); // Dispatch the clearCart action when the button is clicked
  };

  console.log(Total.totalPrice);
  return (
    <div className="checkout">
      <span>Total Amount</span>
      <Link to="/checkout">
        <button className="buttonbtn" onClick={handleClear}>
          <b>${Total.totalPrice}</b> <span>CheckOut</span>
        </button>
      </Link>
    </div>
  );
};

export default CartTotal;
