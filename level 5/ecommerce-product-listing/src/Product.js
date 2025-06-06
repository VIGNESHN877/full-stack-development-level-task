import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;