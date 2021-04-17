import React from "react";

const ProductsGrid = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div key={item.name} className="Item">
        <img className="product_image" src={item.image} />
        <div className="text name">{item.name}</div>
        <div className="text price">{item.price}</div>
      </div>
    );
  });

  return <div className="ProductGrid">{renderItems}</div>;
};

export default ProductsGrid;
