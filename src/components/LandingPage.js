import React from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Milk Dairy Management System</h1>
          <p>
            Optimize your dairy operations with real-time tracking and automated billing. 
            Our system is designed to support dairy farmers and businesses of all sizes.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <img src="https://cdn.vectorstock.com/i/500p/21/00/farm-landscape-milk-splash-01-vector-32132100.jpg" alt="Dairy Operations" className="hero-image" />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
            <h3>Real-Time Tracking</h3>
            <p>Monitor milk collections and deliveries in real-time to ensure smooth operations.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCog} className="feature-icon" />
            <h3>Automated Billing</h3>
            <p>Generate and manage invoices effortlessly, reducing manual errors.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUsers} className="feature-icon" />
            <h3>Customer Management</h3>
            <p>Efficiently handle customer and supplier information to enhance communication.</p>
          </div>
        </div>
        <button className="cta-button">Learn More</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing cutting-edge solutions for the dairy industry. 
          Our Milk Dairy Management System is designed to streamline your operations and improve efficiency.
        </p>
        <p>
          With a focus on innovation and customer satisfaction, we strive to support dairy farmers 
          and businesses in their journey towards success.
        </p>
        <button className="cta-button">Contact Us</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgfbJxSGsDzb3ZpfKmHd9iqj4QB09BWiA4A&s" alt="Testimonials" className="testimonials-image" />
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"The best dairy management software we've ever used!"</p>
            <span>- John Doe, Dairy Owner</span>
          </div>
          <div className="testimonial-item">
            <p>"Simplifies our daily operations and keeps us organized."</p>
            <span>- Jane Smith, Supplier</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to Transform Your Dairy Business?</h2>
        <p>Join us today and take your dairy management to the next level!</p>
        <button className="cta-button">Get Started Now</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Milk Dairy Management System. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
