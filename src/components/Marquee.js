import React from 'react';

const Marquee = () => {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <span className="marquee-item">⚡ Jhatka — Single Stroke <span className="m-dot">·</span></span>
        <span className="marquee-item">🇮🇳 Bhartiya Parampara <span className="m-dot">·</span></span>
        <span className="marquee-item">❤️ Animal Rights <span className="m-dot">·</span></span>
        <span className="marquee-item">🏥 Healthier Meat <span className="m-dot">·</span></span>
        <span className="marquee-item">🔖 Malhar Certified <span className="m-dot">·</span></span>
        <span className="marquee-item">⚖️ Consumer Rights <span className="m-dot">·</span></span>
        <span className="marquee-item">👨‍👩‍👧 Hindu · Sikh · Jain · Buddhist <span className="m-dot">·</span></span>
        
        {/* Duplicate for seamless loop */}
        <span className="marquee-item">⚡ Jhatka — Single Stroke <span className="m-dot">·</span></span>
        <span className="marquee-item">🇮🇳 Bhartiya Parampara <span className="m-dot">·</span></span>
        <span className="marquee-item">❤️ Animal Rights <span className="m-dot">·</span></span>
        <span className="marquee-item">🏥 Healthier Meat <span className="m-dot">·</span></span>
        <span className="marquee-item">🔖 Malhar Certified <span className="m-dot">·</span></span>
        <span className="marquee-item">⚖️ Consumer Rights <span className="m-dot">·</span></span>
        <span className="marquee-item">👨‍👩‍👧 Hindu · Sikh · Jain · Buddhist <span className="m-dot">·</span></span>
      </div>
    </div>
  );
};

export default Marquee;