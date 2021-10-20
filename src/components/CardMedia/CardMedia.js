import React from "react";
import PropTypes from "prop-types";
import CardMediaM from "@mui/material/CardMedia";

function CardMedia(props) {
  return <CardMediaM controls {...props} />;
}

CardMedia.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,
  component: PropTypes.oneOf(["img", "video", "audio"]),
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes.string,
  /**
 * @uxpinignoreprop
 */
  style: PropTypes.object,
  /**
The height of the media
 */
  height: PropTypes.number
};

CardMedia.defaultProps = {
  component: "img",
  height: 120,
  image: "https://www.platingsandpairings.com/wp-content/uploads/2016/01/Paella-1-Square.jpg"
};

export { CardMedia as default };
