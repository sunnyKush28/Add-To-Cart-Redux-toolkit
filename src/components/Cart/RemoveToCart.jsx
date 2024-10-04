import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  removeToCart,
} from "../../features/cart/cartSlices";

const RemoveToCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveToCart = () => {
    dispatch(
      removeToCart({
        id: product.id,
      })
    );
    dispatch(
      decreaseItemQuantity({
        id: product.id,
      })
    );
  };

  return (
    <button className="button" onClick={handleRemoveToCart}>
      Remove to Cart
    </button>
  );
};

export default RemoveToCart;
