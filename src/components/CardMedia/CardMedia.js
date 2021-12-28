import React from "react";
import PropTypes from "prop-types";
import CardMediaM from "@mui/material/CardMedia";


/**
 * @uxpindocurl https://mui.com/api/card-media/
 */
function CardMedia(props) {
  return <CardMediaM controls {...props} />;
}

CardMedia.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   */
  component: PropTypes.oneOf(["img", "video", "audio"]),

  /**
   * The height of the media
   */
  height: PropTypes.number,

  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified. Specifying both may causes the media not to load.
   * Note that caller must specify height otherwise the image will not be visible.
   * @uxpinpropname Img src
   */
  image: PropTypes.string,

  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   * @uxpinpropname Video/ Audio src
   */
  src: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

CardMedia.defaultProps = {
  component: "img",
  height: 120,
  image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
};

export { CardMedia as default };
