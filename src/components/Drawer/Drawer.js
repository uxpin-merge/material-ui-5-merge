import DrawerM from "@mui/material/Drawer";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles, useTheme } from '@mui/styles';
import Box from "../Box/Box"


const useStyles = makeStyles(() => ({
  scrollPaper: {
    alignItems: "flex-start"
  },
  root: {
    display: "flex"
  },
  drawerPaperSide: {
    minWidth: "256px",
    // flexShrink: 0
  },
  drawerPaperBottom: {
    width: "100%",
    flexShrink: 0
  }
}));
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function Drawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => setOpen(props.open), [props]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box style={{ minWidth: "300px", minHeight: "300px",  height: "100%" }} id="jack">
    <DrawerM
      // TransitionProps={uxpContainer ? { tabIndex: "null" } : null}
      classes={{
        scrollPaper: classes.scrollPaper
      }}
      open={open}
      onClose={() => {setOpen(false)}}
      container={document.querySelector("[id='jack']")}
      disableEnforceFocus
      disablePortal={true}
      {...props}
    >
      <div style={{ width: props.width, minHeight:"200px"}}>
        {props.children}
      </div>
    </DrawerM>
</Box>
  )
}




Drawer.propTypes = {
  /**
  * if `true` shows the drawer.
  */
  open: PropTypes.bool,

  /**
   * The variant to use.
   * 
   */
  variant: PropTypes.oneOf(["temporary"]),
  // variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),


  /**
   * Side from which the drawer will appear.
   */
  anchor: PropTypes.oneOf(["left", "top", "right", "bottom"]),

  /**
   * The width of the drawer.
   */
  width: PropTypes.number,

  /**
   * Close event to use with UXPin interactions.
   */
  onClose: PropTypes.func,


  /**
  * The contents of the drawer.
  * @uxpinignoreprop
  */
  children: PropTypes.node,

  /**
   * Needed to display in UXP editor if variant is `permanent` or `persistent`
  //  * @uxpinignoreprop
   */
  // minHeight: PropTypes.number,
};


Drawer.defaultProps = {
open: false,
onClose: () => {setOpen(false)},
};
