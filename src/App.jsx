import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import OrderPage from './components/OrderPage';
import ChatBot from './components/ChatBot'; 


function App() {
  return (
    <Router>
      <nav className="navbar">        
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order Now</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;