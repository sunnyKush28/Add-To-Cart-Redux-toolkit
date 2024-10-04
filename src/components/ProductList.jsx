import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { Link } from "react-router-dom";

const ProductList = ({ category }) => {
  const { items, status, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category]);

  return (
    <>
      <h2 className="headings">Product List</h2>
      <div className="products">
        {items.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="product"
            key={product.id}
          >
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description.slice(0, 48) + " ..."}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
export default ProductList;
