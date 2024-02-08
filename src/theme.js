import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Blue color for primary elements
    },
    secondary: {
      main: '#4caf50', // Green color for secondary elements
    },
    error: {
      main: '#d32f2f', // Vibrant red color for errors/cancel buttons
    },
    background: {
      default: '#fff', // White background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Use Roboto font by default
  },
  button: {
    textTransform: 'none', // Preserve button text case
  },
});

export default theme;
