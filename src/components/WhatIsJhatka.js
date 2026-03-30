import React from 'react';
import { useTranslation } from 'react-i18next';

const WhatIsJhatka = () => {
  const { t } = useTranslation();

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
            <div className="what-badge-text">{t('whatIsJhatka.singleStroke')}</div>
          </div>
        </div>

        <div>
          <div className="section-tag">{t('whatIsJhatka.sectionTag')}</div>
          <h2 className="section-h2">{t('whatIsJhatka.title')}</h2>
          <div className="gold-line"></div>
          
          <p className="body-text">
            {t('whatIsJhatka.description')}
          </p>
          
          <div className="highlight-box">
            {t('whatIsJhatka.highlight')}
          </div>
          
          <p className="body-text">
            {t('whatIsJhatka.details')}
          </p>
          
          <a 
            className="btn-primary" 
            href="https://jhatka.org/what-is-jhatka/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ marginTop: '12px', display: 'inline-block' }}
          >
            {t('whatIsJhatka.learnMore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsJhatka;