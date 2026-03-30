import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo-wrap">
              <div className="footer-brand-text">Jhatka <span>Organisation</span></div>
            </div>
            <div className="footer-desc">
              {t('footer.description')}
            </div>
            <div className="footer-socials">
              <a className="social-btn" href="https://www.youtube.com/channel/UCPlTjuiHSzdiIxw8oq_bDHQ" target="_blank" rel="noopener noreferrer">▶</a>
              <a className="social-btn" href="https://jhatka.org" target="_blank" rel="noopener noreferrer">🌐</a>
              <a className="social-btn" href="https://jhatka.org/register-with-us/" target="_blank" rel="noopener noreferrer">✍</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.about')}</h4>
            <ul>
              <li><a href="https://jhatka.org/what-is-jhatka/" target="_blank" rel="noopener noreferrer">{t('footer.aboutLinks.whatIsJhatka')}</a></li>
              <li><a href="https://jhatka.org/why-jhatka/" target="_blank" rel="noopener noreferrer">{t('footer.aboutLinks.whyJhatka')}</a></li>
              <li><a href="https://jhatka.org/our-story/" target="_blank" rel="noopener noreferrer">{t('footer.aboutLinks.ourStory')}</a></li>
              <li><a href="https://jhatka.org/who-are-we/" target="_blank" rel="noopener noreferrer">{t('footer.aboutLinks.whoAreWe')}</a></li>
              <li><a href="https://jhatka.org/what-we-do/" target="_blank" rel="noopener noreferrer">{t('footer.aboutLinks.whatWeDo')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.resources')}</h4>
            <ul>
              <li><a href="https://jhatka.org/holy-scriptures/" target="_blank" rel="noopener noreferrer">{t('footer.resourcesLinks.holyScriptures')}</a></li>
              <li><a href="https://jhatka.org/our-supporters/" target="_blank" rel="noopener noreferrer">{t('footer.resourcesLinks.ourSupporters')}</a></li>
              <li><a href="https://jhatka.org/events/" target="_blank" rel="noopener noreferrer">{t('footer.resourcesLinks.events')}</a></li>
              <li><a href="https://jhatka.org/news/" target="_blank" rel="noopener noreferrer">{t('footer.resourcesLinks.news')}</a></li>
              <li><a href="https://jhatka.org/blog/" target="_blank" rel="noopener noreferrer">{t('footer.resourcesLinks.blog')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.partners')}</h4>
            <ul>
              <li><a href="https://www.malharcertification.com" target="_blank" rel="noopener noreferrer">{t('footer.partnersLinks.malharCertification')}</a></li>
              <li><a href="https://www.malharcertification.com/shop-locator/" target="_blank" rel="noopener noreferrer">{t('footer.partnersLinks.findShops')}</a></li>
              <li><a href="https://jhatka.org/register-with-us/" target="_blank" rel="noopener noreferrer">{t('footer.partnersLinks.registerNow')}</a></li>
              <li><a href="https://jhatka.org/contact/" target="_blank" rel="noopener noreferrer">{t('footer.partnersLinks.contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            {t('footer.copyright')}<span>🇮🇳</span>
          </div>
          <div className="footer-copy">{t('footer.designedWith')}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;