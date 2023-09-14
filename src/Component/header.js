import React from 'react';
import'./header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
  
      <header className="headClass">
      <h1><span>R</span>eact<span>  J</span>avascript</h1>
      <nav class="navClass">
        <Link to="/">Home</Link>
        <Link to="/whyUs">WhyUs</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/contact">ContactUs</Link>
      </nav>
    </header>
  
  );
}

export default Header;
