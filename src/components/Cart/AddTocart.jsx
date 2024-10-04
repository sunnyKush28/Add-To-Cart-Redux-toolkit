import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  increaseItemQuantity,
} from "../../features/cart/cartSlices";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,

        totalPrice: product.price,
      })
    );
    dispatch(
      increaseItemQuantity({
        id: product.id,
      })
    );
  };

  return (
    <button className="button" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCart;
