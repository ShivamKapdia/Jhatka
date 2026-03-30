import React from 'react';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section" id="contact">
      <h2>{t('cta.title')}</h2>
      <p>{t('cta.description')}</p>
      
      <div className="cta-actions">
        <a 
          className="btn-primary" 
          href="https://jhatka.org/register-with-us/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t('cta.registerWithUs')}
        </a>
        <a 
          className="btn-outline" 
          href="https://www.youtube.com/channel/UCPlTjuiHSzdiIxw8oq_bDHQ" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t('cta.youtube')}
        </a>
        <a 
          className="btn-outline" 
          href="https://jhatka.org/contact/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t('cta.contactUs')}
        </a>
      </div>
    </section>
  );
};

export default CTA;