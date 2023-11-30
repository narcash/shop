import React from "react";

import Header from "../components/Header";
import CategoryPanel from "../components/CategoryPanel";
import ProductsList from "../layouts/ProductsList";

const Main = () => {
  return (
    <div className="mainPage">
      <Header />
      <CategoryPanel />
      <div className="productList">
        <ProductsList />
      </div>
    </div>
  );
};

export default Main;
