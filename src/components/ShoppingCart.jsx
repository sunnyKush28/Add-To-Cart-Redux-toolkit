import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { Link } from "react-router-dom";
import RemoveToCart from "./Cart/RemoveToCart";
import AddToCart from "./Cart/AddTocart";

const ShoppingCart = ({ category }) => {
  // Access the cart state from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <h2 className="heading">Shopping Cart</h2>
      <div className="products">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="product" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} />

                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.totalPrice}</p>
              </Link>
              <div className="buttons">
                <div className="add">
                  <AddToCart product={item} />
                  <RemoveToCart product={item} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
