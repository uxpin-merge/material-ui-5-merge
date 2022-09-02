import DrawerM from "@mui/material/Drawer";
import PropTypes from "prop-types";
import React from "react";
import Box from "../Box/Box"
import { v4 as uuidv4 } from 'uuid';
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function Drawer(props) {

    const [open, setOpen] = React.useState(props.open);

    React.useEffect(() => setOpen(props.open), [props]);

    // Unique Id 
    const id = uuidv4();



    return (
        <Box style={{ minWidth: "200px", minHeight: "300px", height: "100%" }} id={id}>
            <DrawerM
                open={open}
                onClose={() => { setOpen(false) }}
                container={document.querySelector("[id='" + id + "']")}
                disableEnforceFocus
                disablePortal={true}
                {...props}
            >
                <div style={{ width: props.width, minHeight: "200px" }}>
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
    //   variant: PropTypes.oneOf(["temporary"]),
    variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),


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
    onClose: () => { setOpen(false) },
};
