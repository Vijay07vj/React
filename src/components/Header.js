import { LOGO_URL } from "../utils/constants";
import Logo from "../image/Logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header Render");
  //if no dependency array -> useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render and just once.
  // if dependency array is [btnname] => useEffect is called everytime btnName is updated,
  // useEffect(()=>{
  //   console.log("useEffect called");
  // },[btnName])
  const OnlineStatus = useOnlineStatus();
  let statusIndicator;
  if (OnlineStatus) {
    statusIndicator = "✅";
  } else {
    statusIndicator = "🔴";
  }

  return (
    <div className="flex justify-between bg-yellow-50 shadow-xl m-3">
      <div className="Logo-container">
        <Link to="/">
          <img className="w-28 pt-[10px] hover:scale-110" src={Logo}></img>
        </Link>

        <h3 className=" py-4 font-bold text-slate-700">CHENNAI'S RETRO</h3>
      </div>
      <div className="flex items-center ">
        <ul className="flex items-center text-[18px] space-x-5 pr-3">
          {/* <li>Online Status :{OnlineStatus ? "✅" : "🔴"};</li> */}
          <li className="px-3">
            <h2>Online Status : {statusIndicator}</h2>
          </li>
          <li className="px-3 py-1 transform hover:scale-125">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 py-1 transform hover:scale-125">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 py-1 transform hover:scale-125">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 py-1 transform hover:scale-125">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 py-1 transform hover:scale-125">Cart</li>
          <button
            className="px-3 py-1 m-4 rounded-lg mr-4 bg-red-200 hover:bg-green-400"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
