import transitions from "@material-ui/core/styles/transitions";
import { Theme } from "theme-ui";

export const theme = {
  sizes: {
    container: "1600px",
  },
  breakpoints: ["430px", "670px", "769px", "1025px", "1260px", "1440px"],
  colors: {
    text: "#2c3458",
    background: "#f6f8fa;",
    primary: "#563bff",
    secondary: "#2c3458",
    sidebar: "linear-gradient(to right, #434343 0%, black 100%)",
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  boxes: {
    chart: {
      display: "flex",
      flexDirection: "column",
      height: ["250px", "260px", "260px"],
      padding: ["0.5rem", "1rem 1.5rem"],
      borderRadius: "5px",
      background: "white",
      boxShadow: "3px 2px 7px -1px rgba(0, 0, 0, 0.21)",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        // transform: "scale(1.02)",
        boxShadow: " 20px 20px 79px -30px rgba(0, 0, 0, 0.21)",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "normal",
      lineHeight: "heading",
      color: "text",
      fontSize: ["0.9rem", "1.1rem", "1.5rem"],
      margin: ["0.3rem 0"],
    },
    subHeading: {
      fontFamily: "heading",
      fontWeight: "normal",
      lineHeight: "heading",
      fontSize: ["0.9rem"],

      color: "gray",
    },
    display: {
      color: "text",
      fontWeight: "display",
      fontSize: ["32px", "45px", "40px", "45px", "50px"],
      margin: ["0"],
    },
    paragraph: {
      fontFamily: "body",
      fontWeight: "400",
      lineHeight: "body",
      color: "secondary",
      fontSize: ["0.8rem", "1rem"],
      margin: ["0.5rem 0"],
    },
    muted: {
      fontFamily: "body",
      fontWeight: "heading",
      color: "text",
      fontSize: ["1.2rem", "1.5rem", "1.8rem", "2rem"],
      marginTop: ["1rem"],
    },
  },
  styles: {
    root: {
      margin: "0px",
      padding: "0px",
      boxSizing: "border-box",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },

    h1: {
      variant: "text.heading",
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      fontFamily: "body",
      fontSize: ["1rem"],
      "&:hover": {
        color: "blueGradient",
      },
    },

    ".svg-circle-bg": {
      fill: "none",
    },

    ".svg-circle": {
      fill: "none",
    },
  },
};
