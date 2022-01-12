import React from "react";
import PropTypes from "prop-types";
import TypographyM from '@mui/material/Typography';
import ReactHtmlParser from "react-html-parser";
//import BoxM from "../Box/Box";

/**
 * @uxpindocurl https://mui.com/api/typography/
 */
function Typography(props) {
  //const { uxpinRef, ...other } = props;
    return (
      <TypographyM {...props}>{props.children}</TypographyM>
    )
}

Typography.propTypes = {
  /**
   * The typography style to apply.
   * @uxpinpropname  Text
   */
  children: PropTypes.node,
  /*
   * The typography style to apply.
   */
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "inherit"
  ]),

  /**
   * Alignment of text.
   */
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),

  /**
   * Color of text.
   */
  color: PropTypes.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey.500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'secondary.light', 'secondary.dark', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
  
  /**
   * Color of the Background.
   */
  bgcolor: PropTypes.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'secondary.light', 'secondary.dark', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
 
  /**
   *  Controls if typography is inline or block level.
   */
  display: PropTypes.oneOf(["initial", "block", "inline"]),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,

  /**
   * Map typography to another html tag. 
   * @uxpinignoreprop
   */
  component: PropTypes.node,

  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   * The default mapping is the following:
   * @uxpinignoreprop
   */
  headlineMapping: PropTypes.object,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * All Padding.
   * In pixels
   */
  padding: PropTypes.string,

   /**
    * Top Padding.
    * In pixels
    */
   paddingTop: PropTypes.string,
   /**
    * Right Padding.
    * In pixels
    */
   paddingRight: PropTypes.string,
   /**
    * Bottom Padding.
    * In pixels
    */
   paddingBottom: PropTypes.string,
   /**
    * Left Padding.
    * In pixels  
    */
   paddingLeft: PropTypes.string,
   /**
    * All Margin.
    * In pixels
    */
    margin: PropTypes.string,
   /**
    * Top margin.
    * In pixels
    */
   marginTop: PropTypes.string,
   /**
    * Right margin.
    * In pixels
    */
    marginRight: PropTypes.string,
    /**
     * Bottom margin.
     * In pixels
     */
    marginBottom: PropTypes.string,
    /**
     * Left margin.
     * In pixels
     */
    marginLeft: PropTypes.string,
  
    /**
     * Border margin.
     * In pixels
     */
    border: PropTypes.number,
  
    /**
     * Border Top.
     * In pixels
     */
    borderTop: PropTypes.number,
  
    /**
     * Border margin.
     * In pixels
     */
    borderRight: PropTypes.number,
  
    /**
     * Border margin.
     * In pixels
     */
     borderBottom: PropTypes.number,
 
     /**
      * Border margin.
      * In pixels
      */
     borderLeft: PropTypes.number,
   
     borderColor: PropTypes.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey500', 'primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
     
     borderRadius: PropTypes.string,

     /**
      * The system prop that allows defining system overrides as well as additional CSS styles.
      */
     sx: PropTypes.object,

}

export default Typography;