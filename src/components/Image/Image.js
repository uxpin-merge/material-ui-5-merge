import React from "react";
import PropTypes from "prop-types";

function Image(props) {
  return (
    <img
      alt={props.alt}
      src={props.src}
      height={props.height}
      width={props.width}
      style={{objectFit: props.objectFit, height: props.height, width: props.width, ...props.style}}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  objectFit: PropTypes.oneOf(["fill", "contain", "cover", "none", "scale-down"]),
  src: PropTypes.string,
  style: PropTypes.object
};

Image.defaultProps = {
  src: "http://uxpin.com/images/homepage/about-us/location-gdynia.jpg",
  width: "100%",
  height: "100%",
  objectFit: "cover"
}

export default Image;