import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Lola's Filipino Kitchen
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Nav;