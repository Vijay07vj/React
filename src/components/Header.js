import { LOGO_URL } from "../utils/constants";
import Logo from "../image/Logo.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] =useState("Login"); 

  return (
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src={Logo}></img>
        <h3 className="head-name">Innaiku Oru Pudi</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Constact</li>
          <li>Cart</li>
          <button className="btn-login" onClick={()=> btnName ==="Login" ? setBtnName("Logout"): setBtnName("Login")}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
