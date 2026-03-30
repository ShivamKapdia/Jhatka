import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-grid"></div>
        <div className="hero-eyebrow">
          <div className="eyebrow-dot"></div>
          <span className="eyebrow-text">{t('hero.jhatkaOrganisation')}</span>
        </div>
        <div className="hero-author">
          {t('hero.author')} <span>{t('hero.authorName')}</span>
        </div>
        
        <h1 className="hero-h1">
          {t('hero.title')}
        </h1>
        
        <p className="hero-tagline">
          {t('hero.tagline')}
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="#what">{t('hero.discoverJhatka')}</a>
          <a 
            className="btn-outline" 
            href="https://jhatka.org/register-with-us/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t('hero.registerWithUs')}
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