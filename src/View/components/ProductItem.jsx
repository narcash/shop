import React from "react";
import ImageSvg from "./ImageSVG";

import "./component.css";

const ProductItem = ({ product }) => {
  //   const count_star = Math.round(product.rating);
  //   let array = [false, false, false, false, false];

  return (
    <div className="productList_item">
      <div className="productList_bg">
        {/* <img src={product.thumbnail} alt="" /> */}
        <div className="productList_add">
          <ImageSvg
            config={{
              icon: "Plus",
              fill: "none",
              stroke: "#000000",
              size: 24,
            }}
          />
        </div>
      </div>
      <div className="productList_price-rait">
        <h3 className="productList_price">$ {product.price}</h3>
        <div className="productList_rait">{product.rating}</div>
      </div>
      <p className="productList_title">{product.title}</p>
    </div>
  );
};

export default ProductItem;
