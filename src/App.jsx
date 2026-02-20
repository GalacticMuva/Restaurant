import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Menu from './components/Menu'; 

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;