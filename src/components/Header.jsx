import React from "react";
import { Link} from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import logo from "../assets/clipart1539887.png";
const Header = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>Sign up</Link>
        <Link to={"/login"}>Login</Link>
      </nav>

      <div className="header">
        <div>
          <img src={logo} alt="111" />
          <h2>edarville.com</h2>
        </div>

        <div className="inputdiv">
          <CiSearch fontSize={"1.5rem"} />
          <input type="text" placeholder="search..." />
        </div>

       <div className="icons">
       <Link to={"/cart"}><BsCart fontSize={"1.5rem"} /></Link>
        <Link to={"/notifications"}><IoNotificationsOutline fontSize={"1.5rem"} /></Link>
       </div>

        
    
      </div>
    </>
  );
};

export default Header;
