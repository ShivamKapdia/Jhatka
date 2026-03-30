import React from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();

  return (
    <div className="stats-section">
      <div className="stats-inner">
        <div className="stat-item">
          <div className="stat-num">1</div>
          <div className="stat-label">{t('stats.swiftStroke')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">0</div>
          <div className="stat-label">{t('stats.religiousChanting')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100%</div>
          <div className="stat-label">{t('stats.traditionalAncient')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">∞</div>
          <div className="stat-label">{t('stats.bhartiyaHonour')}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;