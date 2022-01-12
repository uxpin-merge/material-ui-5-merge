import React from "react";
import PropTypes from "prop-types";
import CardContentM from '@mui/material/CardContent';


/**
 * @uxpindocurl https://mui.com/api/card-content/
 */
function CardContent(props) {
    return (
        <CardContentM {...props}>{props.children}</CardContentM>
    )
} 

CardContent.propTypes = {
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
   * Map typography to another html tag. 
   */
  component: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object
}

export default CardContent;