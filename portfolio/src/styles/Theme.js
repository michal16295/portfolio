import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkNavy: "#020c1b",
    navy: "#0a192f",
    lightNavy: "#112240",
    navyShadow: "rgba(2,12,27,0.7)",
    darkSlate: "#495670",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    white: "#e6f1ff",
    green: "#64ffda",
    greenTint: "rgba(100,255,218,0.1)",
    pink: "#f57dff",
    blue: "#57cbff",
  },

  fontSizes: {
    xxs: "0.75rem",
    xs: "0.813rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.375rem",
    heading: "2rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
