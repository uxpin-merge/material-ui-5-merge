import React from 'react';
import { create } from 'jss';
import { jssPreset } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StylesProvider } from '@mui/styles';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import PropTypes from "prop-types";
import Paper from "../Paper/Paper";
import { makeStyles } from "@mui/styles";
import CssBaseline from '@mui/material/CssBaseline';
import NoSsr from '@mui/material/NoSsr';
import boilerplateTheme from '../UXPinWrapper/boilerplate-theme';

let theme = createTheme(boilerplateTheme);

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "100%"
    },
    iframe: props => ({
      //  display: "flex",
        margin: "0 auto",
        border: "1px solid #ccc",
        height: props.frameHeight,
        width: props.frameWidth
    }),
    inactiveDiv: props => ({
      //  display: "flex",
        margin: "0 auto",
        border: "1px dashed blue",
        width: props.frameWidth
    })
}));

const CustomHead = props => {
    return (
    <>
        <meta charSet="utf-8" />
        <title>Previewer</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <base target="_parent" />

        <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
            id="mui-merge-font"
        />

        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
            id="mui-merge-icons"
        />
    </>
    );
};

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function IFrame(props) {
    const classes = useStyles(props);

    return (
    <NoSsr>
        <div className={classes.root}>
        {props.active ? (
            <Frame
                frameBorder={0}
                head={<CustomHead />}
                id="target"
                sandbox="allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-scripts"
                className={classes.iframe}
                contentDidMount={props.contentDidMount}
                contentDidUpdate={props.contentDidUpdate}
            >
            <FrameContextConsumer>
                {({ document, window }) => {

                const jss = create({
                    plugins: [...jssPreset().plugins],
                    insertionPoint: document.head
                });

                const cache = createCache({
                    key: 'css',
                    prepend: true,
                    container: document.head,
                })

                return (
                    <StylesProvider jss={jss}>
                        <CacheProvider value={cache}>
                            <ThemeProvider theme={theme}>
                            <CssBaseline />
                                {props.children}
                            </ThemeProvider>
                        </CacheProvider>
                    </StylesProvider>
                );
                }}
                </FrameContextConsumer>
            </Frame>
        ) : (
            <Paper className={classes.inactiveDiv} elevation={0} square>
                {props.children}
            </Paper>
        )}
        </div>
        </NoSsr>
    );
}

    export default IFrame;

IFrame.propTypes = {
    children: PropTypes.node,
    frameWidth: PropTypes.number,
    frameHeight: PropTypes.number,
    active: PropTypes.bool,
    contentDidMount: PropTypes.func,
    contentDidUpdate: PropTypes.func,
};

IFrame.defaultProps = {
    frameWidth: 300,
    frameHeight: 300,
    active: true
};