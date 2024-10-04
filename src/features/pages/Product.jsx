import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../products/productsSlice";
import AddTocart from "../../components/Cart/AddTocart";
import { addToCart } from "../cart/cartSlices";
import RemoveToCart from "../../components/Cart/RemoveToCart";

const Product = ({ category }) => {
  const { productId } = useParams();

  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(category));
  }, []);

  // Find the product with the matching productId
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  console.log(product);
  return (
    <>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : product ? (
        <div className="productDisplay">
          <div>
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <h3>ID: {product.id}</h3>
            <p className="discription">Description: {product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <p className="rating">Rating: {product.rating.rate}</p>

            <p className="likes">Likes: {product.rating.count}</p>
            <div className="buttons">
              <div className="add">
                <AddTocart product={product} />
                <RemoveToCart product={product} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

export default Product;
