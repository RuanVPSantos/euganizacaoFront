import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import "./App.css"
import Home from './pages/home/home';
import Frater from './pages/frater/frater'
import Projetos from './pages/projetos';
import ToDoList from './pages/reference';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#f7f7f7",  // Tom muito escuro de cinza para elementos primários
    },
    secondary: {
      main: '#424242',  // Tom escuro de cinza para elementos secundários
    },
    background: {
      default: '#121212',  // Cor de fundo padrão no modo escuro, quase preto
      paper: '#1d1d1d',    // Cor de fundo dos elementos de papel no modo escuro
    },
    text: {
      primary: '#e0e0e0',  // Cor do texto primário
      secondary: '#bdbdbd',  // Cor do texto secundário
      disabled: '#9e9e9e',   // Cor do texto desabilitado
      hint: '#bdbdbd',       // Cor das dicas de texto
    },
    divider: '#424242',    // Cor do divisor
  },
  typography: {
    allVariants: {
      color: '#e0e0e0',  // Cor padrão para todo o texto
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div style={{ display: 'flex' }}>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frater" element={<Frater />} />
          <Route path="/butler" element={<p>Butler content goes here</p>} />
          <Route path='/reference' element={<ToDoList />} />
          <Route path="/faculdade" element={<p>Faculdade content goes here</p>} />
          <Route path="/familia" element={<p>Família content goes here</p>} />
          <Route path="/amigos" element={<p>Amigos content goes here</p>} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/jogos" element={<p>Jogos content goes here</p>} />
          <Route path="/contas" element={<p>Contas content goes here</p>} />
          <Route path="/sonhos" element={<p>Sonhos content goes here</p>} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
};

export default App;
