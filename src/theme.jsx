import { createTheme } from '@mui/material/styles';
import { blue, green, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[500], // Azul
    },
    secondary: {
      main: green[500], // Verde
    },
    background: {
      default: grey[900], // Cinza escuro para o fundo principal
      paper: grey[800], // Cinza mais claro para o fundo de papel
    },
    text: {
      primary: grey[100], // Branco para o texto principal
      secondary: grey[300], // Cinza claro para o texto secundário
    },
  },
});

export default theme;
