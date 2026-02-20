import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-overlay">
          <h1>Lola's Filipino Kitchen</h1>
          <p>Authentic Comfort Food from the Heart of the Philippines</p>
          <Link to="/menu" className="cta-button">View Our Menu</Link>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>Traditional Recipes</h3>
          <p>Passed down through generations, from our family to yours.</p>
        </div>
        <div className="feature-card">
          <h3>Fresh Ingredients</h3>
          <p>We use the finest local produce to recreate the taste of home.</p>
        </div>
        <div className="feature-card">
          <h3>Built for Comfort</h3>
          <p>Every plate of Adobo and Sinigang is served with love.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;