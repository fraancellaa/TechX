import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
   <>
    <div className="nav-signUp-login-buttons">
          <Button className="nav-signUp-btn">
            <Link to="/orderHistory" style={{textDecoration: "none"}}>
              Order History
            </Link>
          </Button>
          <Button className="nav-login-btn">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()} style={{textDecoration: "none"}}>
              Logout
            </a>
            </Button>
            </div>
     </>
      );
    } else {
      return (
        <>
        <div className="nav-signUp-login-buttons">
        <Button className="nav-signUp-btn">
            <Link to="/signup" style={{textDecoration: "none"}}>
              Signup
            </Link>
            </Button>
            <Button className="nav-login-btn">
            <Link to="/login" style={{textDecoration: "none"}}>
              Login
            </Link>
            </Button>
            </div>
         </>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 style={{marginLeft: "20px"}}>
        <Link to="/" style={{textDecoration: "none"}}>
        <img src="/images/internet.png" alt="TechX-Logo" style={{width: "50px", height: "50px", marginRight: "15px"}}></img>
        
          TechX
        
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
