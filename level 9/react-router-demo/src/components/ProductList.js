// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "iPhone 15", price: "$999" },
  { id: 2, name: "MacBook Pro", price: "$1999" },
  { id: 3, name: "iPad Air", price: "$599" }
];

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
