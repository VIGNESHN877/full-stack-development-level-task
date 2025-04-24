import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Delicious
        </NavLink>
        <Search />
        <div className="navbar-links">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;