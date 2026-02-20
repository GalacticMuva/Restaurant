import { Link } from 'react-router-dom'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>Lola's Filipino Kitchen</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;