// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#668ac4",
    },
    secondary: {
      main: '#9d7cd8',
    },
    background: {
      default: '#16161e',
      paper: '#1d1f30',
    },
    text: {
      primary: '#a9b1d6',  
      secondary: '#828bb8',  
      disabled: '#4e5579',
      hint: '#828bb8',
    },
    divider: '#3b4261',
  },
  typography: {
    allVariants: {
      color: '#a9b1d6',
    },
  },
});

export default theme;
