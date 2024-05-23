// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#668ac4",  // Azul mais escuro Tokyo Night
    },
    secondary: {
      main: '#9d7cd8',  // Roxo mais escuro Tokyo Night
    },
    background: {
      default: '#16161e',  // Fundo padrão ainda mais escuro
      paper: '#1d1f30',    // Fundo de papel mais escuro
    },
    text: {
      primary: '#a9b1d6',  // Texto primário mais escuro
      secondary: '#828bb8',  // Texto secundário mais escuro
      disabled: '#4e5579',   // Texto desabilitado mais escuro
      hint: '#828bb8',       // Dicas de texto mais escuras
    },
    divider: '#3b4261',    // Cor do divisor mais escura
  },
  typography: {
    allVariants: {
      color: '#a9b1d6',  // Cor padrão para todo o texto mais escura
    },
  },
});

export default theme;
