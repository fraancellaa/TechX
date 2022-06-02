import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Hero() {
    return (
    <>
    <div className="hero-container">
  <h1>Welcome to TechX</h1>
  <p>
    A collection of the best tech products on the Market
  </p>
  <p>
    <Button bsStyle="primary"><Link to="/signup">← Go to Signup</Link></Button>
  </p>
        </div>

    </>
    );
}

export default Hero;