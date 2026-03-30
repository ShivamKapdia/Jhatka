import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a className="nav-logo" href="#">
          <span className="nav-logo-text">Jhatka <span>Organisation</span></span>
        </a>

        <ul className="nav-links">
          <li><a href="#what">What is Jhatka</a></li>
          <li><a href="#why">Why Jhatka</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#video">Videos</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a 
          className="nav-cta" 
          href="https://jhatka.org/register-with-us/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Register Now
        </a>

        <button className="hamburger" onClick={() => setMobileOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu open">
          <button className="mobile-close" onClick={closeMobile}>✕</button>
          <a href="#what" onClick={closeMobile}>What is Jhatka</a>
          <a href="#why" onClick={closeMobile}>Why Jhatka</a>
          <a href="#gallery" onClick={closeMobile}>Gallery</a>
          <a href="#video" onClick={closeMobile}>Videos</a>
          <a href="#events" onClick={closeMobile}>Events</a>
          <a href="https://jhatka.org/register-with-us/" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>
            Register Now
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;