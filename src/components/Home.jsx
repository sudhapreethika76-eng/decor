import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/images/icon.jpg';
import image1 from '../assets/images/caimg2.avif';
import image2 from '../assets/images/himg3.jpg';
import image3 from '../assets/images/himg4.jpg';

import '../assets/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {
  return (
    <>
    
      <nav
        className="navbar navbar-expand-lg px-4 shadow-sm"
        style={{ backgroundColor: 'lightblue' }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bold d-flex align-items-center" to="/">
            <img
              src={icon}
              alt="logo"
              className="img-fluid me-2"
              style={{ width: '45px', height: '45px', borderRadius: '10px' }}
            />
            DECORNEST
          </Link>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav">
              <li className="nav-item mx-1">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/products" className="nav-link text-white">Products</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/about" className="nav-link text-white">About Us</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/contact" className="nav-link text-white">Contact Us</Link>
              </li>
            
          
        

      

      {/* Search Bar */}
        <li className="nav-item mx-2 mb-3 px-2">
          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
           
          </form>
        </li>

        
        {/* Login Button */}
        <li className="nav-item mx-2">
          <Link
            to="/login"
            className="btn btn-primary fw-bold  px-3 py-1 d-flex align-items-center"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <section
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h3 className="display-4 fw-bold mb-2">A BRAND NEW ARRIVALS</h3>
          <p className="lead mb-2">
            Beautiful home décor to make your space stylish and cozy.
          </p>
          <Link to="/products" className="btn btn-light btn-lg rounded-pill px-4">
            View Products
          </Link>
        </div>
      </section>

      
      <section className="decor-section">
        <div className="decor-grid">

          <div className="decor-box text-box">
            <h2 className="decor-title">Get our latest decor styles</h2>
            <p className="decor-text">
              Discover modern and minimal home décor pieces that bring comfort
              and elegance to your space.
            </p>
            <Link to="/products" className="decor-btn">Shop Now</Link>
          </div>

          <div className="decor-box image-box">
            <img src={image3} alt="Chair" />
          </div>

          <div className="decor-box image-box">
            <img src={image2} alt="Decor" />
          </div>

          <div className="decor-box text-box">
            <h2 className="decor-title">Perfect decor for every home</h2>
            <p className="decor-text">
              Handcrafted décor designed to suit modern living rooms and
              cozy interiors.
            </p>
            <Link to="/products" className="decor-btn">View More</Link>
          </div>

        </div>
      </section>

      
      <footer className="unique-footer">

        <div className="footer-top">
          <h3 className="footer-brand">DecorNest</h3>
          <p className="footer-tagline">
            Thoughtfully designed décor for modern living spaces.
          </p>
        </div>

        <div className="footer-middle">

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#">New Arrivals</a>
            <a href="#">Best Sellers</a>
            <a href="#">Offers</a>
            <a href="#">Gift Items</a>
          </div>

          <div className="footer-column">
            <h3>For Home</h3>
            <a href="#">Living Room</a>
            <a href="#">Bedroom</a>
            <a href="#">Dining</a>
            <a href="#">Balcony</a>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <a href="#">Help Center</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Contact</a>
          </div>


          
 </div>

        <div className="footer-bottom">
          <p>© 2026 DecorNest • Designed with love for beautiful homes</p>
        </div>

      </footer>
    </>
  );
}

export default Home;
