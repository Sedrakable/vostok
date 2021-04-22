import React from "react";
import "../css/Navbar.css";
import TabButton from "./TabButton";

//Images
import News from "../assets/illu/News.svg";
import Products from "../assets/illu/Products.svg";
import About from "../assets/illu/About.svg";
import Contact from "../assets/illu/Contact.svg";
import Shop from "../assets/illu/Cart.svg";
import Logo from "../assets/illu/Main Logo.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <TabButton image={Shop} />
      </div>
      <div className="middle">
        <TabButton href="/news" className={"TabButton"} image={News} />
        <TabButton href="/products" className={"TabButton"} image={Products} />
        <TabButton href="/" className={"MainLogo"} image={Logo} />
        <TabButton href="/about" className={"TabButton"} image={About} />
        <TabButton href="/contact" className={"TabButton"} image={Contact} />
      </div>
      <div className="right">
        <TabButton href="/shop" className={"ShopButton"} image={Shop} />
      </div>
    </div>
  );
};

export default Navbar;
