import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/products/Products";
import Login from "./pages/auth/Login";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import { useSelector } from "react-redux";

export default function App() {
 const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <React.Fragment>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route path="/auth" element={<Login />} />
            <Route path="*" element={<Navigate to={"/auth"}/>}/>
          </React.Fragment>
        )}
      </Routes>
    </BrowserRouter>
  );
}
