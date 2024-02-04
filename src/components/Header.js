import { LOGO_URL } from "../utils/constants";
import Logo from "../image/Logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] =useState("Login"); 
  // console.log("Header Render");
  //if no dependency array -> useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render and just once.
  // if dependency array is [btnname] => useEffect is called everytime btnName is updated,
  // useEffect(()=>{
  //   console.log("useEffect called");
  // },[btnName])

  return (
    <div className="header">
      <div className="Logo-container">
        <Link to="/"><img className="Logo" src={Logo}></img>
        </Link>
        
        <h3 className="head-name">Innaiku Oru Pudi</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" >Home</Link>
            </li>
          <li>
            <Link to = "/about">About Us</Link>
            </li>
          <li>
            <Link to = "/contact">Contact Us</Link>
            </li>
          <li>Cart</li>
          <button className="btn-login" onClick={()=> btnName ==="Login" ? setBtnName("Logout"): setBtnName("Login")}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
