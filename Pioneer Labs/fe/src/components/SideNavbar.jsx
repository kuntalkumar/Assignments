import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavbar.css';

const SideNavbar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </div>
  );
};

export default SideNavbar;
