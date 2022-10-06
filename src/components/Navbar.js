
import React from "react";
import { useNavigate } from 'react-router-dom'

import Button from "./Button";

const Navbar = () => {

  const navigate = useNavigate();


  const clickLogin = () => {
    navigate("/login");
    
  }
  const clickSignup = () => {
    navigate("/signup");
  };
  


  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">Dev@Deakin</p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="d-flex">
            <Button onClick={clickSignup} isNavbar={true}   label="signup" />
            <div className="mx-2">
            <Button onClick={clickLogin} isNavbar={true}  label="login" />
            </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
