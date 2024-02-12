import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import Header from "../../components/Header";

export default function Products() {
  const [products, setProducts] = useState([]);
  const productsInCart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }
  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }
  function existInCart(id) {
    const productExists = productsInCart.find((product) => product.id === id);

    if (productExists) {
      return true;
    }
    return false;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <Header />
      {products.map((product) => {
        const addedToCart = existInCart(product.id);
        return (
          <div
            style={{
              width: "calc(96%/3)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>{product.title}</p>
            <small>{product.description}</small>
            <h5>{product.price}</h5>
            <br></br>
            {!addedToCart ? (
              <button onClick={() => handleAddToCart(product)}>
                Add To Cart
              </button>
            ) : null}
            <br></br>
            {addedToCart ? (
              <button onClick={() => handleRemoveFromCart(product.id)}>
                Remove From Cart
              </button>
            ) : null}
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
