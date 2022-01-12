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
  src: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  width: "100%",
  height: "100%",
  objectFit: "cover"
}

export default Image;