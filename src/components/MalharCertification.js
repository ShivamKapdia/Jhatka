import React from 'react';

const MalharCertification = () => {
  return (
    <section id="malhar">
      <div className="malhar-section">
        <div>
          <div className="section-tag">Our Partner</div>
          <h2 className="section-h2">Malhar <em>Certification</em></h2>
          <div className="gold-line"></div>
          
          <p className="body-text">
            Malhar Certification is the trusted platform that verifies Jhatka vendors. Every Malhar-certified vendor ensures meat is slaughtered according to Hindu tradition — fresh, clean, and uncontaminated.
          </p>
          
          <p className="body-text">
            We encourage every Hindu, Sikh, Jain and Buddhist to purchase mutton and chicken only from Malhar-certified vendors. Look for the Malhar seal of authenticity.
          </p>

          <div style={{ display: 'flex', gap: '13px', flexWrap: 'wrap', marginTop: '28px' }}>
            <a 
              className="btn-primary" 
              href="https://www.malharcertification.com/shop-locator/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Find Certified Shops
            </a>
            <a 
              className="btn-outline" 
              href="https://www.malharcertification.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Malhar
            </a>
          </div>
        </div>

        <div className="malhar-cards">
          <div className="malhar-card">
            <div className="malhar-icon">🔖</div>
            <div className="malhar-text">
              <h4>Strict Vendor Verification</h4>
              <p>Only vendors following Hindu tradition receive Malhar certification after thorough verification.</p>
            </div>
          </div>

          <div className="malhar-card">
            <div className="malhar-icon">✅</div>
            <div className="malhar-text">
              <h4>100% Purity Guaranteed</h4>
              <p>Fresh, hygienic meat. No saliva contamination. No mixing with other animal meat.</p>
            </div>
          </div>

          <div className="malhar-card">
            <div className="malhar-icon">👨‍👩‍👧</div>
            <div className="malhar-text">
              <h4>Hindu Khatik Community</h4>
              <p>Supporting traditional Khatik butchers who have practiced this trade for generations.</p>
            </div>
          </div>

          <div className="malhar-card">
            <div className="malhar-icon">📍</div>
            <div className="malhar-text">
              <h4>Shop Locator — Nashik & Pune</h4>
              <p>Find Malhar-certified shops near you. Network growing across Maharashtra.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MalharCertification;