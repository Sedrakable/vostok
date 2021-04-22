import React from "react";
import ProductGrid from "./ProductGrid";
import "../css/Products.css";

import image_1 from "../assets/photos/cards 1.jpg";
import image_2 from "../assets/photos/cards 2.jpg";
import image_3 from "../assets/photos/cards 3.jpg";
import image_4 from "../assets/photos/cards 4.jpg";

const items = [
  {
    name: "Animal Gangdom",
    price: 6.99,
    image: image_1,
  },
  {
    name: "Greek Gods",
    price: 19.99,
    image: image_2,
  },
  {
    name: "Anchient Civs",
    price: 8.99,
    image: image_3,
  },
  {
    name: "Anchient Civs 2",
    price: 12.99,
    image: image_4,
  },
];

const Products = () => {
  return (
    <div className="Products">
      <h1 className="pageTitle">Products</h1>
      <ProductGrid items={items} />
    </div>
  );
};

export default Products;
