import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DB8024',
    },
    secondary: {
      main: '#2A2B39',
    },
    text: {
      primary: '#fff',
    },
    background: {
      default: '#F4F5F4',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat Semi-bold',
      color: "#132540",
      fontWeight: "bold",
    },
    allVariants: {
      fontFamily: 'Montserrat'
    },
  }
});

export { theme };