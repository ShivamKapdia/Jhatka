import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo-wrap">
              <img 
                className="footer-logo-img" 
                src="https://jhatka.org/wp-content/uploads/2021/02/logo-2-120x51.png" 
                alt="Jhatka Logo" 
              />
              <div className="footer-brand-text">Jhatka <span>Organisation</span></div>
            </div>
            <div className="footer-desc">
              The fight for Jhatka — preserving Bhartiya tradition, animal rights, consumer rights and Khatik community livelihoods across India.
            </div>
            <div className="footer-socials">
              <a className="social-btn" href="https://www.youtube.com/channel/UCPlTjuiHSzdiIxw8oq_bDHQ" target="_blank" rel="noopener noreferrer">▶</a>
              <a className="social-btn" href="https://jhatka.org" target="_blank" rel="noopener noreferrer">🌐</a>
              <a className="social-btn" href="https://jhatka.org/register-with-us/" target="_blank" rel="noopener noreferrer">✍</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="https://jhatka.org/what-is-jhatka/" target="_blank" rel="noopener noreferrer">What is Jhatka</a></li>
              <li><a href="https://jhatka.org/why-jhatka/" target="_blank" rel="noopener noreferrer">Why Jhatka</a></li>
              <li><a href="https://jhatka.org/our-story/" target="_blank" rel="noopener noreferrer">Our Story</a></li>
              <li><a href="https://jhatka.org/who-are-we/" target="_blank" rel="noopener noreferrer">Who Are We</a></li>
              <li><a href="https://jhatka.org/what-we-do/" target="_blank" rel="noopener noreferrer">What We Do</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://jhatka.org/holy-scriptures/" target="_blank" rel="noopener noreferrer">Holy Scriptures</a></li>
              <li><a href="https://jhatka.org/our-supporters/" target="_blank" rel="noopener noreferrer">Our Supporters</a></li>
              <li><a href="https://jhatka.org/events/" target="_blank" rel="noopener noreferrer">Events</a></li>
              <li><a href="https://jhatka.org/news/" target="_blank" rel="noopener noreferrer">News</a></li>
              <li><a href="https://jhatka.org/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Partners</h4>
            <ul>
              <li><a href="https://www.malharcertification.com" target="_blank" rel="noopener noreferrer">Malhar Certification</a></li>
              <li><a href="https://www.malharcertification.com/shop-locator/" target="_blank" rel="noopener noreferrer">Find Shops</a></li>
              <li><a href="https://jhatka.org/register-with-us/" target="_blank" rel="noopener noreferrer">Register Now</a></li>
              <li><a href="https://jhatka.org/contact/" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2021–2025 Jhatka Organisation · <span>All Rights Reserved · jhatka.org 🇮🇳</span>
          </div>
          <div className="footer-copy">Designed with ❤️ for Bharat</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;