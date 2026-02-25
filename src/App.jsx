import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import {Home} from './pages/Home';
import {MenuPage} from './pages/MenuPage';
import { OrderPage } from './pages/OrderPage' 


function App() {
  return (

    <HashRouter>
      <Nav />
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} /> 
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;