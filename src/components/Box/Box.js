import React from 'react';
import PropTypes from 'prop-types';
import BoxM from '@mui/material/Box';
import { styled } from '@mui/material/styles';



const Root = styled('div')({
  width: "100%", display: "table"
})

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function Box (props) {
  const sx = Root;
  const { uxpinRef, ...other } = props;
  return (
  <BoxM
          {...other}
        >
          {!props.children ? (
              <span>
                <center>
                  <p>Drag components into this wrapper</p>
                </center>
              </span>
            ) : (
              props.children
            )}
           
        </BoxM>
  );
}


Box.propTypes = {
    /**
     * Accepts all system properties, as well as any valid CSS properties.
     */
    /** @uxpinignoreprop */
  sx: PropTypes.object,

    /**
   * The content of the box.
   */
  /** @uxpinignoreprop */
  children: PropTypes.node,
  
 
  clone: PropTypes.bool,

  /**
   * Color of text
   */

  color: PropTypes.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey.500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),

  bgcolor: PropTypes.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),



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

  boxShadow: PropTypes.number,

  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  // textOverflow: PropTypes.oneOf(["clip", "ellipsis"]),
  
};


export default Box;