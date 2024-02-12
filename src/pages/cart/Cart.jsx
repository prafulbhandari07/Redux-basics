import React from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";

export default function Cart() {
  const [totalProductsInCart, products] = useSelector((state) => [
    state.cart.products.length,
    state.cart.products,
  ]);
  const dispatch = useDispatch();

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <div>
      <Header />
      <h2>Total items in your cart : {totalProductsInCart}</h2>
      <ul>
        {products.map((product) => {
          return (
            <div>
              <h4>Product-{product.title}</h4>
              <h5>Rating-{product.rating}</h5>
              <p>Product Description-{product.description}</p>
              <button onClick={() => handleRemoveFromCart(product.id)}>
                Remove From Cart
              </button>
              <hr></hr>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
