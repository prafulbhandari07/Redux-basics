import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, totalProductsInCart] = useSelector((state) => [state.auth.isLoggedIn,state.cart.products.length]);
  const navigate = useNavigate();

  function handleCartRedirect(e) {
    e.preventDefault();
    if (isLoggedIn) {
      console.log("loggedin");
      navigate("/cart");
    } else {
      console.log("no");
    }
  }
  return (
    <header
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <a href="/cart" onClick={handleCartRedirect}>
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/doodle/96/shopping-cart--v1.png"
          alt="shopping-cart--v1"
        />
        <span>{totalProductsInCart}</span>
      </a>
    </header>
  );
}
