import React from "react";
import PropTypes from "prop-types";
import CardActionsM from '@mui/material/CardActions';


/**
 * @uxpindocurl https://mui.com/api/card-actions/
 */
function CardActions(props) {
    return (
        <CardActionsM {...props}>{props.children}</CardActionsM>
    )
} 

CardActions.propTypes = {
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
   * If true, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object
}

export default CardActions;