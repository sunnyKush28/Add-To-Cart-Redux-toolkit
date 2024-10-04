import React from "react";
import Navbar from "../../components/sidebar/Navbar";
import ProductList from "../../components/ProductList";
import ShopingCart from "../../components/ShoppingCart";

const Home = ({ category, setCategory }) => {
  return (
    <div>
      <Navbar category={category} setCategory={setCategory} />
      <ProductList category={category} />
    </div>
  );
};

export default Home;
