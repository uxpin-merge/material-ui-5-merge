import * as React from 'react';
import PropTypes from "prop-types";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ContainerM from '@mui/material/Container';

/**
 * @uxpindocurl https://mui.com/api/container/
 */
export default function Container(props) {
  return (
    <React.Fragment>
      <ContainerM {...props}>
        {props.children}
      </ContainerM>
    </React.Fragment>
  );
}

Container.propTypes = {
  /**
   * The content node to be collapsed.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Set the max-width to match the min-width of the current breakpoint. 
   * This is useful if you'd prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport. 
   * It's fluid by default.
   */
  fixed: PropTypes.bool,

  /**
   * If true, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'false']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * Example: span, div
   */
  component: PropTypes.string,

  /**
   * Override or extend the styles applied to the component. 
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,

}