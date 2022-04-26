import React from "react";
import PropTypes from "prop-types";
import IFrame from "../IFrame/IFrame";
import { makeStyles } from "@mui/styles";
import Typography from "../Typography/Typography";
import Grid from "../Grid/Grid";
import Select from "../Select/Select";
import MenuItem from "../MenuItem/MenuItem";
import FormControl from "../FormControl/FormControl";
import Box from "../Box/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "1280px",
        minHeight: "667px",
        background: "#eeeeee",
    },
    formControl: {
        margin: 0,
        minWidth: 120,
        border: "none",
    },
}));

/**
 * @uxpinwrappers
 * NonResizableWrapper
 */
function DeviceViewer(props) {
    const classes = useStyles(props);
    const [frameWidth, setframeWidth] = React.useState(0);
    const [frameHeight, setframeHeight] = React.useState(0);
    const [deviceView, setdeviceView] = React.useState(props.defaultView);

    React.useEffect(() => {
        setdeviceView(props.defaultView);

      //   //Check if component is in UXPin editor or UXP previewer
        if (document.querySelector("#simplified")) {
        const selectIcon = document.querySelector(
            "#deviceSelector .MuiSelect-icon"
        );
        selectIcon.style.display = "none";
        } else if (document.querySelector(".canvas-container")) {
        // If in UXPin editor ... top margin from uxp preview canvas
        const uxpContainer = document.querySelector(".canvas-container");
        uxpContainer.style.marginTop = "0";
        }
    }, [props]);

    const handleChange = (event) => {
        setdeviceView(event.target.value);
    };

    const setViewportDimensions = () => {
    switch (deviceView) {
        case "desktop":
        setframeWidth(1280);
        setframeHeight(1024);
            return;
        case "tablet":
        setframeWidth(768);
        setframeHeight(1024);
            return;
        case "tablet-landscape":
        setframeWidth(1024);
        setframeHeight(768);
            return;
        case "mobile":
        setframeWidth(375);
        setframeHeight(667);
            return;
        case "mobile-landscape":
        setframeWidth(667);
        setframeHeight(375);
            return;
        default:
            return;
    }
    };

    const IFrameResize = () => {
        setViewportDimensions();
        const iframeElement = document.querySelector("#target");

        if (deviceView === "desktop") {
        iframeElement.style.height =
        iframeElement.contentWindow.document.body.scrollHeight + 2 + "px";
        } else {
        iframeElement.style.removeProperty("height");
        }
    };

    return (
        <div className={classes.root}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.deviceToolbar}
        >
            <Grid item>
            <FormControl className={classes.formControl} id="deviceSelector">
                <Select
                value={deviceView}
                onChange={handleChange}
                framewidth={frameWidth}
                frameheight={frameHeight}
                className={classes.deviceSelect}
                disableUnderline
                >
                {props.desktopOption && (
                    <MenuItem value={"desktop"}>
                    <Typography variant="caption">
                        Desktop ( 1280 x 1024 )
                    </Typography>
                    </MenuItem>
                )}
                {props.tabletOption && (
                    <MenuItem value={"tablet"}>
                    <Typography variant="caption">
                        Tablet ( 668 x 1024 )
                    </Typography>
                    </MenuItem>
                )}
                {props.tabletOption && (
                    <MenuItem value={"tablet-landscape"}>
                    <Typography variant="caption">
                        Tablet Landscape (1024x668)
                    </Typography>
                    </MenuItem>
                )}
                {props.mobileOption && (
                    <MenuItem value={"mobile"}>
                    <Typography variant="caption">Mobile (375x667)</Typography>
                    </MenuItem>
                )}
                {props.mobileOption && (
                    <MenuItem value={"mobile-landscape"}>
                    <Typography variant="caption">
                        Mobile Landscape (667x375)
                    </Typography>
                    </MenuItem>
                )}
                </Select>
            </FormControl>
            </Grid>
        </Grid>
        <Box pb={3}>
            <IFrame
            active={props.active}
            frameWidth={frameWidth}
            frameHeight={frameHeight}
            id="target"
            contentDidMount={IFrameResize}
            contentDidUpdate={IFrameResize}
            >
            <div style={{ overflowX: "hidden" }}>
                {!props.children ? (
                <span>
                    <center>
                    <p>Drag components into this wrapper</p>
                    </center>
                </span>
                ) : (
                props.children
                )}
            </div>
            </IFrame>
        </Box>
        </div>
    );
}

DeviceViewer.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    defaultView: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
    desktopOption: PropTypes.bool,
    tabletOption: PropTypes.bool,
    mobileOption: PropTypes.bool,
};

DeviceViewer.defaultProps = {
    defaultView: "desktop",
    desktopOption: true,
    tabletOption: true,
    mobileOption: true,
    active: true,
};

export default DeviceViewer;
