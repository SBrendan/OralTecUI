import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f4f4f4",
    },
    secondary: {
      main: "#2A2B39",
    },
    text: {
      primary: "#74787b",
    },
    background: {
      default: "#fff",
    },
    action: {
      active: "#DB8024",
    }
    
  },
  typography: {
    h1: {
      fontFamily: "Montserrat Medium",
      color: "#293842",
      fontWeight: "bold",
    },
    body1: {
      color: "#74787b"
    },
    allVariants: {
      fontFamily: "Montserrat",
    },
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.2)'
      }
    }
  }
});

export { theme };
