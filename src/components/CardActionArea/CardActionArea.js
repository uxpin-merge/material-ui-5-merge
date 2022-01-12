import React from "react";
import PropTypes from "prop-types";
import CardActionAreaM from '@mui/material/CardActionArea';


/**
 * @uxpindocurl https://mui.com/api/card-action-area/
 */
function CardActionArea(props) {
    return (
        <CardActionAreaM {...props}>{props.children}</CardActionAreaM>
    )
} 

CardActionArea.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,
  
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object
}

export default CardActionArea;