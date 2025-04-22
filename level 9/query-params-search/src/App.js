// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductSearch from './ProductSearch';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
