import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section text-center py-5 bg-light border-bottom mb-4">
        <div className="container">
          <h1 className="display-4 fw-bold">Lola's Filipino Kitchen</h1>
          <p className="lead text-muted">Authentic Comfort Food from the Heart of the Philippines</p>
          <Link to="/menu" className="btn btn-primary btn-lg mt-3">
            View Our Menu
          </Link>
        </div>
      </header>

      <section className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body">
                <h3 className="h5">Traditional Recipes</h3>
                <p className="card-text text-muted">Passed down through generations, from our family to yours.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body">
                <h3 className="h5">Fresh Ingredients</h3>
                <p className="card-text text-muted">We use the finest local produce to recreate the taste of home.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body">
                <h3 className="h5">Built for Comfort</h3>
                <p className="card-text text-muted">Every plate of Adobo and Sinigang is served with love.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;