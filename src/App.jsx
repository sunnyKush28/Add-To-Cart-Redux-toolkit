import "./App.css";
import { Provider } from "react-redux";
import { Store } from "./app/Store";
import ShopingCart from "./components/ShoppingCart";
import ProductList from "./components/ProductList";
import Navbar from "./components/sidebar/Navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./features/pages/Home.jsx";
import Product from "./features/pages/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartTotal from "./components/total/CartTotal.jsx";
import CheckOut from "./components/CheckOut/CheckOut.jsx";
function App() {
  const [category, setCategory] = useState(null);
  return (
    <>
      <div className="App">
        <Cart />
        <Routes>
          <Route
            path="/"
            element={<Home category={category} setCategory={setCategory} />}
          />

          <Route
            path="/product/:productId"
            element={<Product category={category} />}
          />
          <Route
            path="/shopingcart"
            element={<ShopingCart category={category} />}
          />
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>

        <CartTotal />
      </div>
    </>
  );
}

export default App;
