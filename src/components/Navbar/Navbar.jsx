import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setshowlogin }) => {
  const [menu, setmenu] = useState("Home");
    const { contextvalue } = useContext(StoreContext);
    const {  totalamount } = contextvalue;
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navnar-menu">
        <Link
          to="/"
          onClick={() => {
            setmenu("Home");
          }}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#exploremenu"
          onClick={() => {
            setmenu("Menu");
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#Appdownload"
          onClick={() => {
            setmenu("Mobile App");
          }}
          className={menu === "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => {
            setmenu("contact us");
          }}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          
          <div className={totalamount()===0?"":"dot"}></div>
        </div>
        <button
          onClick={() => {
            setshowlogin(true);
          }}
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
