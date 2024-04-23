import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import "./App.css"
import Home from './pages/home';
import Projetos from './pages/projetos';
import ToDoList from './pages/reference';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frater" element={<p>Frater content goes here</p>} />
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
  );
};

export default App;
