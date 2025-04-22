
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: 20 }}>
      <Link to="/" style={{ margin: 10 }}>Home</Link>
      <Link to="/products" style={{ margin: 10 }}>Products</Link>
      <Link to="/about" style={{ margin: 10 }}>About</Link>
    </nav>
  );
}
