import React from "react";
import PropTypes from "prop-types";
import CardMediaM from '@mui/material/CardMedia';

function CardMedia(props) {
    return (
        <CardMediaM {...props}>{props.children}</CardMediaM>
    )
} 

CardMedia.propTypes = {
  /**
   * Custom Prop.
   * THe Alt of the Media
   */
  alt: PropTypes.string,
  
  /**
   * The Media of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * Map typography to another html tag. 
   */
  component: PropTypes.string,

  /**
   * Custom Prop.
   * The Height of the Media.
   */
  height: PropTypes.string,

  /**
   * Image to be displayed as a background image. 
   * Either image or src prop must be specified. 
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes.string,

  /**
   * An alias for image property. Available only with media components. Media components: video, audio, picture, iframe, img.
   */
  src: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object
}

export default CardMedia;