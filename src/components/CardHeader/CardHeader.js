import React from "react";
import PropTypes from "prop-types";
import CardHeaderM from '@mui/material/CardHeader';

function CardHeader(props) {
    return (
        <CardHeaderM {...props}>{props.children}</CardHeaderM>
    )
} 

CardHeader.propTypes = {
  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,

  /**
   * The Avatar element to display.
   */
  avatar: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If true, subheader and title won't be wrapped by a Typography component. 
   * This can be useful to render an alternative Typography variant by wrapping the title text, and optional subheader text with the Typography component.
   */
  disableTypography: PropTypes.bool,

  /**
   * The content of the component.
   */
  subheader: PropTypes.node,

  /**
   * These props will be forwarded to the subheader (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  subheaderTypograhyProps: PropTypes.object,

  /**
   * The content of the component.
   */
  title: PropTypes.node,

  /**
   * These props will be forwarded to the title (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  titleTypographyProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object
}

export default CardHeader;