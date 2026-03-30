import React from 'react';
import { useTranslation } from 'react-i18next';

const Appeals = () => {
  const { t } = useTranslation();

  return (
    <section className="appeals-section">
      <div className="appeals-inner">
        <div className="appeals-header">
          <div className="section-tag" style={{ textAlign: 'center' }}>{t('appeals.sectionTag')}</div>
          <h2 className="section-h2" style={{ textAlign: 'center' }}>{t('appeals.title')}</h2>
        </div>

        <div className="appeals-grid">
          <div className="appeal-card">
            <span className="appeal-icon">🙏</span>
            <h3>{t('appeals.appeal1Title')}</h3>
            <p>{t('appeals.appeal1')}</p>
          </div>

          <div className="appeal-card">
            <span className="appeal-icon">🌿</span>
            <h3>{t('appeals.appeal2Title')}</h3>
            <p>{t('appeals.appeal2')}</p>
          </div>

          <div className="appeal-card">
            <span className="appeal-icon">✝️</span>
            <h3>{t('appeals.appeal3Title')}</h3>
            <p>{t('appeals.appeal3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appeals;