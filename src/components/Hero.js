import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-grid"></div>
        <div className="hero-eyebrow">
          <div className="eyebrow-dot"></div>
          <span className="eyebrow-text">Jhatka Organisation · Est. 2021</span>
        </div>
        <div className="hero-author">By <span>S. Ravi Ranjan Singh</span></div>
        
        <h1 className="hero-h1">
          Jhatka —<br />
          The <em>Humanomics</em>
        </h1>
        
        <p className="hero-tagline">
          The traditional Indian way of slaughter — single stroke, minimum pain, 
          maximum respect for life, animal rights, and Bharatiya honour.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="#what">Discover Jhatka</a>
          <a 
            className="btn-outline" 
            href="https://jhatka.org/register-with-us/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register With Us
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img 
          src="https://jhatka.org/wp-content/uploads/2021/02/why-choose.jpg" 
          alt="Why Choose Jhatka" 
        />
        <div className="hero-right-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;