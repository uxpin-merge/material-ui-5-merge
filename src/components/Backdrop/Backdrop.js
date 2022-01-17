import React from "react";
import PropTypes from "prop-types";
import { Backdrop as BackdropM } from "@mui/material";

/**
 * @uxpindocurl https://mui.com/api/backdrop/
 */
function Backdrop(props) {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => {
    setOpen(props.open)
  }, [props]); // Only re-run the effect if value prop changes

  return ( 
    <BackdropM 
      {...props}
      open={open}
      onClick={() => {
        setOpen(!open)
        console.log(open);
      }}

    >
      {props.children}
    </BackdropM>
  )
}

Backdrop.propTypes = {
  /**
   * If true, the component is shown. 
   */  
  open: PropTypes.bool,
  
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See CSS API for more details.
   * https://mui.com/api/backdrop/#css
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * @uxpinignoreprop
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the Backdrop. Either a string to use a HTML element or a component.
   * @uxpinignoreprop
   */
  components: PropTypes.elementType,

  /**
   * The props used for each slot inside the Backdrop.
   * @uxpinignoreprop
   */
  componentsProps: PropTypes.object,

  /**
   * If true, the backdrop is invisible. It can be used when rendering a popover or a custom select component.
   */
  invisible: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,

  /**
   * The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
   * Set to "auto" to automatically calculate transition time based on height. "" must be used instead of '' or ``.
   * When using number simple write the number with no quotes. Example: 3000.
   */
  transitionDuration: PropTypes.number, 
  // transitionDuration: PropTypes.oneOfType([
  //   PropTypes.number,
  //   PropTypes.shape({
  //     enter: PropTypes.number,
  //     exit: PropTypes.number
  //   })
  // ]),

  /**
   * @uxpinignoreprop
   */
  onClick: PropTypes.func,
};

Backdrop.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  open: true,
};

export { Backdrop as default };