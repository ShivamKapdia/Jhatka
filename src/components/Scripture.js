import React from 'react';
import { useTranslation } from 'react-i18next';

const Scripture = () => {
  const { t } = useTranslation();

  return (
    <div className="scripture-section">
      <div className="scripture-inner">
        <span className="scripture-icon">📖</span>
        <div className="scripture-text">
          {t('scripture.quote')}
        </div>
        <div className="scripture-source">{t('scripture.source')}</div>
      </div>
    </div>
  );
};

export default Scripture;