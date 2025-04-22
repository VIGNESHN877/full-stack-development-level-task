// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: "iPhone 15", price: "$999", description: "Latest iPhone with A16 Bionic chip." },
  { id: 2, name: "MacBook Pro", price: "$1999", description: "Powerful laptop for professionals." },
  { id: 3, name: "iPad Air", price: "$599", description: "Light and powerful tablet." }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetail;
