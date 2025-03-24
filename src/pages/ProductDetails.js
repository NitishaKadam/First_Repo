import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  // Sample product data (you can replace it with API data later)
  const products = [
    { id: 1, name: "Product 1", price: "$10", description: "This is product 1." },
    { id: 2, name: "Product 2", price: "$15", description: "This is product 2." },
    { id: 3, name: "Product 3", price: "$20", description: "This is product 3." },
  ];

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
