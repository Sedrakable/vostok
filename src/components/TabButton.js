import React from "react";

const TabButton = ({ className, href, image }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href}>
      <img src={image} className={className} />
    </a>
  );
};

export default TabButton;
