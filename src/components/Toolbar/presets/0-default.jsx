import React from 'react';
import Toolbar from '../Toolbar';
import Button from "../../Button/Button";
import IconButton from "../../IconButton/IconButton";
import Typography from "../../Typography/Typography";

export default (
    <Toolbar uxpId='toolbar-1' >
        <IconButton
            color="inherit"
            aria-label="Menu"
            uxpId="3"
        >
            menu
        </IconButton>
        <Typography variant="h6" color="inherit" uxpId="5">
            News
        </Typography>
        <Button color="inherit" uxpId="6">Login</Button>
    </Toolbar>
)