import React from "react";
import Navbar from "./Navbar";
import NewBox from "./NewBox";
import Route from "./Route";
import Products from "./Products";
import "../css/NewBox.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route path="/">
        <NewBox />
      </Route>

      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
};

export default App;
