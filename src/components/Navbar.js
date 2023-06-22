import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="inner-navbar-container">
        <span className="logo-name">App Test</span>
        <ul className="menu-list">
          <li className="menu-item">Explore</li>
          <li className="menu-item">Web3</li>
          <li className="menu-item">Learn</li>
          <li className="menu-item">Individuals</li>
          <li className="menu-item">Businesses</li>
        </ul>
        <div>
          <button className="signin-button">Sign in</button>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
