// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//Searching for sony → URL becomes: /products?q=sony

//Filtering by fashion → /products?q=sony&category=fashion