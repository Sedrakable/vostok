import React from "react";
import MainLogo from "./MainLogo";
import "../css/Navbar.css";
import TabButton from "./TabButton";
import ShopButton from "./ShopButton";

//Images
import News from "../assets/illu/News.svg";
import Products from "../assets/illu/Products.svg";
import About from "../assets/illu/About.svg";
import Contact from "../assets/illu/Contact.svg";
import Shop from "../assets/illu/Cart.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <ShopButton image={Shop} />
      </div>
      <div className="middle">
        <TabButton image={News} />
        <TabButton image={Products} />
        <MainLogo />
        <TabButton image={About} />
        <TabButton image={Contact} />
      </div>
      <div className="right">
        <ShopButton image={Shop} />
      </div>
    </div>
  );
};

export default Navbar;
