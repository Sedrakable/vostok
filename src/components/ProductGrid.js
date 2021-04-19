import React from "react";
import Shop from "../assets/illu/Cart.svg";

const ProductsGrid = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div key={item.name} className="Item">
        <div className="image_wrapper">
          <img className="product_image" src={item.image}></img>
          <div className="text name">{item.name}</div>
        </div>

        <div className="item_buttons">
          <div className="text price item_button">Buy {item.price}$</div>
          <img className="add2cart item_button" src={Shop} />
        </div>
      </div>
    );
  });

  return <div className="ProductGrid">{renderItems}</div>;
};

export default ProductsGrid;
