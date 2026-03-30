import React from 'react';
import { useTranslation } from 'react-i18next';

const WhyJhatka = () => {
  const { t } = useTranslation();

  return (
    <section id="why" className="why-section">
      <div className="why-inner">
        <div className="why-header">
          <div className="section-tag" style={{ textAlign: 'center' }}>{t('whyJhatka.sectionTag')}</div>
          <h2 className="section-h2" style={{ textAlign: 'center' }}>{t('whyJhatka.title')}</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">01</div>
            <span className="why-icon">🇮🇳</span>
            <h3>{t('whyJhatka.reason1Title')}</h3>
            <p>{t('whyJhatka.reason1')}</p>
          </div>

          <div className="why-card">
            <div className="why-num">02</div>
            <span className="why-icon">💼</span>
            <h3>{t('whyJhatka.reason2Title')}</h3>
            <p>{t('whyJhatka.reason2')}</p>
          </div>

          <div className="why-card">
            <div className="why-num">03</div>
            <span className="why-icon">🏥</span>
            <h3>{t('whyJhatka.reason3Title')}</h3>
            <p>{t('whyJhatka.reason3')}</p>
          </div>

          <div className="why-card">
            <div className="why-num">04</div>
            <span className="why-icon">🐄</span>
            <h3>{t('whyJhatka.reason4Title')}</h3>
            <p>{t('whyJhatka.reason4')}</p>
          </div>

          <div className="why-card">
            <div className="why-num">05</div>
            <span className="why-icon">⚖️</span>
            <h3>{t('whyJhatka.reason5Title')}</h3>
            <p>{t('whyJhatka.reason5')}</p>
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
              {t('navbar.registerNow')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJhatka;