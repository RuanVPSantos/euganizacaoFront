import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import './App.css';
import Home from './pages/home/home';
import Frater from './pages/frater/frater';
import Projetos from './pages/projetos';
import ToDoList from './pages/reference';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Login from './pages/login/login';
import withAuth from './withAuth'; // Certifique-se de que o caminho está correto

const ProtectedHome = withAuth(Home);
const ProtectedFrater = withAuth(Frater);
const ProtectedProjetos = withAuth(Projetos);
const ProtectedToDoList = withAuth(ToDoList);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<ProtectedHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/frater" element={<ProtectedFrater />} />
            <Route path="/butler" element={withAuth(() => <p>Butler content goes here</p>)} />
            <Route path='/reference' element={<ProtectedToDoList />} />
            <Route path="/faculdade" element={withAuth(() => <p>Faculdade content goes here</p>)} />
            <Route path="/familia" element={withAuth(() => <p>Família content goes here</p>)} />
            <Route path="/amigos" element={withAuth(() => <p>Amigos content goes here</p>)} />
            <Route path="/projetos" element={<ProtectedProjetos />} />
            <Route path="/jogos" element={withAuth(() => <p>Jogos content goes here</p>)} />
            <Route path="/contas" element={withAuth(() => <p>Contas content goes here</p>)} />
            <Route path="/sonhos" element={withAuth(() => <p>Sonhos content goes here</p>)} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
