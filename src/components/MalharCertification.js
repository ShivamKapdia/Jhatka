import React from 'react';
import { useTranslation } from 'react-i18next';

const MalharCertification = () => {
  const { t } = useTranslation();

  return (
    <section id="malhar">
      <div className="malhar-section">
        <div>
          <div className="section-tag">{t('malhar.sectionTag')}</div>
          <h2 className="section-h2">{t('malhar.title')}</h2>
          <div className="gold-line"></div>
          
          <p className="body-text">
            {t('malhar.description')}
          </p>

          <div style={{ display: 'flex', gap: '13px', flexWrap: 'wrap', marginTop: '28px' }}>
            <a 
              className="btn-primary" 
              href="https://www.malharcertification.com/shop-locator/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('malhar.findCertifiedShops')}
            </a>
            <a 
              className="btn-outline" 
              href="https://www.malharcertification.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('malhar.visitMalhar')}
            </a>
          </div>
        </div>

        <div className="malhar-cards">
          <div className="malhar-card">
            <div className="malhar-icon">🔖</div>
            <div className="malhar-text">
              <h4>{t('malhar.strictVerification')}</h4>
              <p>{t('malhar.strictVerificationDesc')}</p>
            </div>
          </div>

          <div className="malhar-card">
            <div className="malhar-icon">✅</div>
            <div className="malhar-text">
              <h4>{t('malhar.purityGuaranteed')}</h4>
              <p>{t('malhar.purityGuaranteedDesc')}</p>
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