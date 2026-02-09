import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import icon from '../assets/images/icon.jpg';

import image1 from '../assets/images/pimg1.avif';
import image2 from '../assets/images/pimg3.avif';
import image3 from '../assets/images/pimg4.jpg';
import image4 from '../assets/images/pimg5.avif';
import image5 from '../assets/images/pimg6.jpg';
import image6 from '../assets/images/pimg7.avif';

import image7 from '../assets/images/pimg11.jpg';
import image8 from '../assets/images/pimg12.jpg';
import image9 from '../assets/images/pimg13.avif';
import image10 from '../assets/images/pimg14.avif';


import image11 from '../assets/images/pimg1.avif';
import image12 from '../assets/images/pimg3.avif';
import image13 from '../assets/images/pimg4.jpg';
import image14 from '../assets/images/pimg5.avif';






function Products() {
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

      
      
      
      
      
    <section class="top-category-section">

  <h2 class="top-category-title">Top Categories</h2>

  <div class="top-category-row">

    <div class="top-category-item">
      <img src={image1} alt="WALL"/>
      <p>WALL HANGING</p>
    </div>

    <div class="top-category-item">
      <img src={image2} alt="VASES"/>
      <p>VASES</p>
    </div>

    <div class="top-category-item">
      <img src={image3} alt="LAMP"/>
      <p>LAMP</p>
    </div>

    <div class="top-category-item">
      <img src={image4} alt="CANDLES"/>
      <p>CANDLES</p>
    </div>

    <div class="top-category-item">
      <img src={image5} alt="BASKET"/>
      <p>BASKET</p>
    </div>

    
    
  </div>
</section>


    
    



<section class="arrival-section">

  <h2 class="arrival-title">New Arrivals</h2>
  <p class="arrival-subtitle">
    Discover our latest home décor pieces, designed for modern living.
  </p>

  <div class="arrival-container">

    
    <div class="arrival-card">
      <span class="badge">New</span>
      <img src={image7} alt="Lamp"/>
      <h4>Modern Drawer</h4>
      <p class="price">₹2500</p>
    </div>

    
    <div class="arrival-card">
      <img src={image8} alt="Wall Clock"/>
      <h4>Minimal Wall Clock</h4>
      <p class="price">₹1299</p>
    </div>

    
    <div class="arrival-card">
      <span class="badge sale">Sale</span>
      <img src={image9} alt="Plant Decor"/>
      <h4>Comfort Lounge Chair</h4>
      <p class="price">₹2355</p>
    </div>

    
    <div class="arrival-card">
      <img src={image10} alt="Chair"/>
      <h4>Decorative Plant Stand</h4>
      <p class="price">₹1699</p>
    </div>

  </div>

</section>



      <div className="container mt-5 mb-5">

  <h4 className="text-center mb-4">FEATURED PRODUCTS</h4>
  <p className="text-center mb-5">
    Elegant lighting crafted to elevate your home ambiance
  </p>

  <div className="row">

    <div className="col-6 col-md-3 mb-4">
      <div className="card h-100 text-center">
        <img
          src={image11}
          className="card-img-top"
          alt="Luma Light"
        />
        <div className="card-body">
          <h5 className="card-title">WALL LIGHT</h5>
          
          <p className="fw-bold">₹640</p>
          <a href="#" className="btn btn-primary btn-sm">
            Book Now
          </a>
        </div>
      </div>
    </div>

    <div className="col-6 col-md-3 mb-4">
      <div className="card h-100 text-center">
        <img
          src={image12}
          className="card-img-top"
          alt="Aura Lamp"
        />
        <div className="card-body">
          <h5 className="card-title">VASES</h5>
          
          <p className="fw-bold">₹770</p>
          <a href="#" className="btn btn-primary btn-sm">
            Book Now
          </a>
        </div>
      </div>
    </div>

    <div className="col-6 col-md-3 mb-4">
      <div className="card h-100 text-center">
        <img
          src={image13}
          className="card-img-top"
          alt="Spark Lamp"
        />
        <div className="card-body"> 
          <h5 className="card-title">SPARK LAMP</h5>
          
          <p className="fw-bold">₹630</p>
          <a href="#" className="btn btn-primary btn-sm">
            Book Now
          </a>
        </div>
      </div>
    </div>

    <div className="col-6 col-md-3 mb-4">
      <div className="card h-100 text-center">
        <img
          src={image14}
          className="card-img-top"
          alt="Ambient Light"
        />
        <div className="card-body">
          <h5 className="card-title">CANDLE</h5>
          
          <p className="fw-bold">₹660</p>
          <a href="#" className="btn btn-primary btn-sm">
            Book Now
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

          
         
      
    



           


      
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

export default Products;
