import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/images/icon.jpg';

import '../assets/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Contact() {
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
      







      

<section class="container my-5">

  <h2 class="text-center mb-4">Contact Us</h2>
  <p class="text-center mb-5">
    Have questions or need help? Feel free to reach out to us.
  </p>

  <div class="row g-4">

    
    <div class="col-md-6">
      <div class="card p-4">
        <h5 class="mb-3">Drop Us a Message</h5>

        <form>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Enter your name"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Enter your email"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea class="form-control" rows="4" placeholder="Write your message"></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-50">
            Send Message
          </button>
        </form>
      </div>
    </div>

    
    <div class="col-md-6">
      <div class="card p-4 h-100">
        <h5 class="mb-3">Decor starts Here</h5>

        <p><strong>Address:</strong><br></br>
          123 Home Decor Street,<br></br>
          Chennai, India
        </p>

        <p><strong>Email:</strong><br></br>
          support@decornest.com
        </p>

        <p><strong>Phone:</strong><br></br>
          +91 98765 43210
        </p>

        <p>
          We are available Monday to Saturday,
          9:00 AM – 6:00 PM.
        </p>
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

export default Contact;
