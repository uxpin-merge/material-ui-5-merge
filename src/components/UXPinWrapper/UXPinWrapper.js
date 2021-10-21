// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from "./boilerplate-theme";

const theme = createTheme(boilerplateTheme);

export default function UXPinWrapper({ children }) {
  let icons = document.createElement('link');
  icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
  icons.setAttribute('rel', 'stylesheet');
  document.head.appendChild(icons);

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}