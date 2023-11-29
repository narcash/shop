/* eslint-disable no-undef */
import React from 'react';

// SVG components
import Bags from '../assets/icon_menu/Bags';
import Glasses from '../assets/icon_menu/Glasses';
import Headphone from '../assets/icon_menu/Headphone';
import Shoes from '../assets/icon_menu/Shoes';
import Watch from '../assets/icon_menu/Watch';

const ImageSvg = ({ config }) => {
  const svg_components = {
    Bags,
    Glasses,
    Headphone,
    Shoes,
    Watch,
  };

  const ImageConfig = {
    icon: config.icon ? config.icon : '',
    fill: config.fill ? config.fill : 'none',
    stroke: config.stroke ? config.stroke : 'black',
    size: config.size ? config.size : 30,
  };
  const Icon = svg_components[config.icon];
  return (
    <span>
      <Icon
        fill={ImageConfig.fill}
        stroke={ImageConfig.stroke}
        size={ImageConfig.size}
      />
    </span>
  );
};

export default ImageSvg;
