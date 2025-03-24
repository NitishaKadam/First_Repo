import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
  ];

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
