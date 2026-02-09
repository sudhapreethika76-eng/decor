import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/images/icon.jpg';
import image1 from '../assets/images/caimg1.jpg';

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
      
      



<section class="about-section">
  <div class="about-container">

    <div class="about-text">
      <h2>ABOUT OUR DECOR</h2>
      <p>
        At Decornest, we believe your home should reflect your personality.
        We bring you carefully selected décor pieces that add comfort,
        elegance, and warmth to every space.
      </p>
      <p>
        From modern designs to timeless classics, our products are crafted
        to make your home feel truly special.
      </p>
    </div>

    <div class="about-image">
      <img src={image1} alt="Home Decor"/>
    </div>

  </div>
</section>




<section class="container my-5">

  <div class="row g-4">

    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Beautiful Designs</h5>
          <p class="card-text">
            We offer modern and elegant home décor products that bring
            style, comfort, and warmth to every living space.
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Premium Quality</h5>
          <p class="card-text">
            Every product is carefully selected to ensure durability,
            quality, and long-lasting beauty for your home.
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Made for Every Home</h5>
          <p class="card-text">
            Our collections are designed to suit every lifestyle and
            help you create a home you truly love.
          </p>
        </div>
      </div>
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
