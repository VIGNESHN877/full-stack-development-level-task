import React, { useState } from 'react';
import products from './data';
import Product from './Product';
import './App.css'; // Import CSS for styling

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <header>
        <h1>E-Commerce Product Listing</h1>
        <div className="cart">
          Cart: <span>{cart.length}</span> items
        </div>
      </header>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default App;