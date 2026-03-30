import React from 'react';

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <h2>Join the Fight for <em>Jhatka</em></h2>
      <p>Register with us. Spread awareness. Insist for Jhatka. Every order is a vote for tradition, animal rights, and Bhartiya honour.</p>
      
      <div className="cta-actions">
        <a 
          className="btn-primary" 
          href="https://jhatka.org/register-with-us/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Register With Us
        </a>
        <a 
          className="btn-outline" 
          href="https://www.youtube.com/channel/UCPlTjuiHSzdiIxw8oq_bDHQ" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          ▶ YouTube
        </a>
        <a 
          className="btn-outline" 
          href="https://jhatka.org/contact/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTA;