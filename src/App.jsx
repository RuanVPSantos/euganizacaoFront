import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import "./App.css"
import Home from './pages/home/home';
import Frater from './pages/frater/frater'
import Projetos from './pages/projetos';
import ToDoList from './pages/reference';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
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
