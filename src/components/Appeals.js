import React from 'react';

const Appeals = () => {
  return (
    <section className="appeals-section">
      <div className="appeals-inner">
        <div className="appeals-header">
          <div className="section-tag" style={{ textAlign: 'center' }}>Our Appeal</div>
          <h2 className="section-h2" style={{ textAlign: 'center' }}>A Message for <em>Everyone</em></h2>
        </div>

        <div className="appeals-grid">
          <div className="appeal-card">
            <span className="appeal-icon">🙏</span>
            <h3>To Hindus — Non-Vegetarian</h3>
            <p>Insist for Jhatka from your very next order — be it raw, cooked, or served in a hotel, train, airline, or gathering. Always ask: "Is this Jhatka?"</p>
          </div>

          <div className="appeal-card">
            <span className="appeal-icon">🌿</span>
            <h3>To Hindus — Vegetarian</h3>
            <p>Differentiate between killing and torturous killing. Oppose the imposition of any foreign food system on non-vegetarian Hindus. Stand with your community.</p>
          </div>

          <div className="appeal-card">
            <span className="appeal-icon">✝️</span>
            <h3>To Christians & Atheists</h3>
            <p>Care for animal pain. Care for the sentiments of others. Care for your health. A system that causes less suffering is always the better choice.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appeals;