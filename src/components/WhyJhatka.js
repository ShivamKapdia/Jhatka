import React from 'react';

const WhyJhatka = () => {
  return (
    <section id="why" className="why-section">
      <div className="why-inner">
        <div className="why-header">
          <div className="section-tag" style={{ textAlign: 'center' }}>Why It Matters</div>
          <h2 className="section-h2" style={{ textAlign: 'center' }}>5 Reasons to Choose <em>Jhatka</em></h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">01</div>
            <span className="why-icon">🇮🇳</span>
            <h3>Bhartiya Honour & Tradition</h3>
            <p>The ancient Indian tradition of Jhatka is at the verge of extinction. Traditional Khatik butchers are being bulldozed by the Meat Mafia. We must preserve our heritage.</p>
          </div>

          <div className="why-card">
            <div className="why-num">02</div>
            <span className="why-icon">💼</span>
            <h3>Economic Justice</h3>
            <p>We must defend the shrinking space of castes like KHATICS. Those who have been in this trade for ages face discrimination and unemployment.</p>
          </div>

          <div className="why-card">
            <div className="why-num">03</div>
            <span className="why-icon">🏥</span>
            <h3>Health & Hygiene</h3>
            <p>Slow and torturous killing leads to contamination. Stress hormones released during prolonged killing spoil the meat. Health-conscious people choose Jhatka only.</p>
          </div>

          <div className="why-card">
            <div className="why-num">04</div>
            <span className="why-icon">🐄</span>
            <h3>Animal Rights</h3>
            <p>Every animal has the right to die with the least possible pain. A single swift stroke severs all connections instantaneously — this is humanity's duty.</p>
          </div>

          <div className="why-card">
            <div className="why-num">05</div>
            <span className="why-icon">⚖️</span>
            <h3>Consumer Rights</h3>
            <p>Every consumer has the right to eat by their own choice. No seller or Meat Mafia can impose their personal belief or convenience on consumers.</p>
          </div>

          <div className="why-card" style={{ background: 'rgba(255,107,0,0.06)', borderColor: 'rgba(255,107,0,0.3)' }}>
            <div className="why-num" style={{ color: 'rgba(255,107,0,0.15)' }}>∞</div>
            <span className="why-icon">🔱</span>
            <h3>Join the Movement</h3>
            <p>Whether Hindu, Sikh, Jain, Buddhist — or simply a conscious consumer — stand with us. Insist for Jhatka from your very next order.</p>
            <a 
              className="btn-primary" 
              href="https://jhatka.org/register-with-us/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginTop: '18px', fontSize: '10px', padding: '11px 22px' }}
            >
              Register Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJhatka;