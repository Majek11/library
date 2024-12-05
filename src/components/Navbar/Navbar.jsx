import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Logo
        </a>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;