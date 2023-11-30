import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

import "./layouts.css";

const ProductsList = () => {
  const { error, loading, pagination, productList } = useSelector(
    (state) => state.productSlice
  );
  return (
    <div className="productList_items">
      {productList.map((elem) => (
        <ProductItem key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default ProductsList;
