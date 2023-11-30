import React from "react";

// SVG components
import Bags from "../assets/icon_menu/Bags.jsx";
import Glasses from "../assets/icon_menu/Glasses.jsx";
import Headphone from "../assets/icon_menu/Headphone.jsx";
import Shoes from "../assets/icon_menu/Shoes.jsx";
import Watch from "../assets/icon_menu/Watch.jsx";
import Plus from "../assets/icon_menu/Plus.jsx";

const ImageSvg = ({ config }) => {
  const svg_components = {
    Bags,
    Glasses,
    Headphone,
    Shoes,
    Watch,
    Plus,
  };

  const ImageCofig = {
    fill: config.fill ? config.fill : "none",
    stroke: config.stroke ? config.stroke : "black",
    size: config.size ? config.size : 30,
  };

  const Icon = svg_components[config.icon];

  return (
    <span>
      <Icon
        fill={ImageCofig.fill}
        stroke={ImageCofig.stroke}
        size={ImageCofig.size}
      />
    </span>
  );
};

export default ImageSvg;
