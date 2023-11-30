import Box from "../assets/svg/box.jsx";
import Album from "../assets/svg/album.jsx";

const Image = ({ config }) => {
  const components = {
    box: Box,
    album: Album,
  };

  const ImageConfig = {
    icon: config.icon ? config.icon : "",
    size: config.size ? config.size : 40,
    stroke: config.stroke ? config.stroke : "#000000",
    fill: config.fill ? config.fill : "#ffffff",
    onClick: config.onClick ? config.onClick : () => {},
  };

  const TagNames = components[ImageConfig.icon];

  return (
    <span onClick={ImageConfig.onClick}>
      <TagNames
        stroke={ImageConfig.stroke}
        fill={ImageConfig.fill}
        size={ImageConfig.size}
      />
    </span>
  );
};

export default Image;
