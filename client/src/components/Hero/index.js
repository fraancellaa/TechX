import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Hero() {
    return (
    <>
    <div className="hero-container">
  <h1>Welcome to <span className="TechX-title">TechX</span></h1>
  <p>
    A collection of the best tech products on the Market
  </p>
  <p className="main-btn-container">
    <Button variant="primary" className="signup-btn"><Link to="/signup" className="main-link">Signup</Link></Button>
    <Button variant="outline-primary" className="login-btn"><Link to="/login" className="login-link-btn">Login</Link></Button>
  </p>
        </div>

    </>
    );
}

export default Hero;