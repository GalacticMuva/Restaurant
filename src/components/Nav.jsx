import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <h2>Lola's</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>

      </ul>
    </nav>
  );
};

export default Nav;