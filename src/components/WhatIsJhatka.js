import React from 'react';

const WhatIsJhatka = () => {
  return (
    <section id="what" className="what-section">
      <div className="what-inner">
        <div className="what-img-stack">
          <div className="what-img-main">
            <img 
              src="https://jhatka.org/wp-content/uploads/2021/02/why-choose.jpg" 
              alt="What is Jhatka" 
            />
          </div>
          <div className="what-img-thumb">
            <img 
              src="https://jhatka.org/wp-content/uploads/2021/02/mission-2.jpg" 
              alt="Jhatka Mission" 
            />
          </div>
          <div className="what-badge">
            <div className="what-badge-num">1</div>
            <div className="what-badge-text">Single Stroke</div>
          </div>
        </div>

        <div>
          <div className="section-tag">What is Jhatka</div>
          <h2 className="section-h2">The Word is <em>Self-Explanatory</em></h2>
          <div className="gold-line"></div>
          
          <p className="body-text">
            The word "Jhatka" literally means a strong, single stroke. Jhatka Meat refers to the traditional Indian method of slaughtering an animal for food in the least painful manner possible.
          </p>
          
          <div className="highlight-box">
            "Jhatka causes minimum pain and trauma to the animal. As pain is a message sent by the brain to the body — in Jhatka, that communication severs instantly. Science and humanity both approve."
          </div>
          
          <p className="body-text">
            In a single powerful strike, the spinal cord is severed and the animal feels no prolonged pain. This is the ancient, humane, and scientifically approved method our ancestors practiced for centuries.
          </p>
          
          <a 
            className="btn-primary" 
            href="https://jhatka.org/what-is-jhatka/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ marginTop: '12px', display: 'inline-block' }}
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsJhatka;