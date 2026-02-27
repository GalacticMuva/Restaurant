import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-white" to="/">
          Lola's Kitchen
        </Link>
        
        <div className="navbar-nav ms-auto">
          <Link className="nav-link px-3" to="/">Home</Link>
          <Link className="nav-link px-3" to="/menu">Menu</Link>
          <Link className="nav-link px-3" to="/order">Order</Link>
          
          <Link className="nav-link px-3 fw-bold text-warning border border-warning rounded" to="/chat">
            🤖 AI Waiter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;