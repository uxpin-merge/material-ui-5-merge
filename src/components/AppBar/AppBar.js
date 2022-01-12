import React from 'react';
import PropTypes from 'prop-types';
import AppBarM from '@mui/material/AppBar';


/**
 * @uxpindocurl https://mui.com/api/app-bar/
 */
function AppBar(props) {
    return (
      <AppBarM {...props} sx={props.sx}>
      {props.children}
    </AppBarM>
    );
  }

  AppBar.propTypes = {
   /**
    * The content of the component.
    */
   /** @uxpinignoreprop */
   children: PropTypes.node,

   /**
    * Override or extend the styles applied to the component. See CSS API https://mui.com/api/app-bar/#css for more details.
    */
   /** @uxpinignoreprop */
   classes: PropTypes.object,

   /**
    * The color of the component. It supports those theme colors that make sense for this component.
    */
   color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'transparent']),

   /**
    * If true, the color prop is applied in dark mode.
    */
   enableColorOnDark: PropTypes.bool,

   /** The positioning type. The behavior of the different options is described in the MDN web docs 
    * https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning. 
    * Note: sticky is not universally supported and will fall back to static when unavailable. */
   position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),

   /**
    * The system prop that allows defining system overrides as well as additional CSS styles. 
    * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
    */
   /** Style */
   sx: PropTypes.object,

  }

export default AppBar;
