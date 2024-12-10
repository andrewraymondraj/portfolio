import React from 'react';
import '../styles/navbar.css';
const Navbar = () => {
  return (
    <nav>
     
      <ul className="navbar">
        
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
