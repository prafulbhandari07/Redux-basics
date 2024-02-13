import React from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";

export default function Cart() {
  const [totalProductsInCart, products, totalPrice] = useSelector((state) => [
    state.cart.products.length,
    state.cart.products,
    state.cart.totalPrice,
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
        {products.map(({ product, quantity }) => {
          return (
            <div>
              <h4>Product-{product.title}</h4>
              <h3>Quantity - {quantity}</h3>
              <h5>Price - ${product.price}</h5>
              <p>Product Description-{product.description}</p>
              <button onClick={() => handleRemoveFromCart(product.id)}>
                Remove From Cart
              </button>
              <hr></hr>
            </div>
          );
        })}
      </ul>
      <p>Total price - ${totalPrice}</p>
    </div>
  );
}
