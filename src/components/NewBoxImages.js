import React, { useState } from "react";

const NewBoxImages = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderItems = items.map((item) => {
    return (
      <div key={item.text} className="ImageWrap ">
        <img className="Image" src={item.image} />
        <div className="text abs">{item.text}</div>
      </div>
    );
  });

  return <React.Fragment>{renderItems}</React.Fragment>;
};

export default NewBoxImages;
