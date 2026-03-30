import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <nav id="navbar" className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a className="nav-logo" href="#">
          <img
            src={logo}
            alt="Malhar Jhatka Logo"
            className="nav-logo-img"
          />
          <span className="nav-logo-text">
            Malhar <span>Jhatka</span>
          </span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#what">{t('navbar.whatIsJhatka')}</a>
          </li>
          <li>
            <a href="#why">{t('navbar.whyJhatka')}</a>
          </li>
          <li>
            <a href="#gallery">{t('navbar.gallery')}</a>
          </li>
          <li>
            <a href="#video">{t('navbar.videos')}</a>
          </li>
          <li>
            <a href="#events">{t('navbar.events')}</a>
          </li>
          <li>
            <a href="#contact">{t('navbar.contact')}</a>
          </li>
        </ul>

        <div className="nav-language-selector">
          <button 
            className={i18n.language === 'en' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => changeLanguage('en')}
            title="English"
          >
            EN
          </button>
          <button 
            className={i18n.language === 'hi' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => changeLanguage('hi')}
            title="हिंदी"
          >
            HI
          </button>
          <button 
            className={i18n.language === 'mr' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => changeLanguage('mr')}
            title="मराठी"
          >
            MR
          </button>
        </div>

        <a
          className="nav-cta"
          href="https://jhatka.org/register-with-us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('navbar.registerNow')}
        </a>

        <button className="hamburger" onClick={() => setMobileOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu open">
          <button className="mobile-close" onClick={closeMobile}>
            ✕
          </button>
          <a href="#what" onClick={closeMobile}>
            {t('navbar.whatIsJhatka')}
          </a>
          <a href="#why" onClick={closeMobile}>
            {t('navbar.whyJhatka')}
          </a>
          <a href="#gallery" onClick={closeMobile}>
            {t('navbar.gallery')}
          </a>
          <a href="#video" onClick={closeMobile}>
            {t('navbar.videos')}
          </a>
          <a href="#events" onClick={closeMobile}>
            {t('navbar.events')}
          </a>
          <a
            href="https://jhatka.org/register-with-us/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
          >
            {t('navbar.registerNow')}
          </a>
          
          <div className="mobile-language-selector">
            <button 
              className={i18n.language === 'en' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => {
                changeLanguage('en');
              }}
            >
              EN
            </button>
            <button 
              className={i18n.language === 'hi' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => {
                changeLanguage('hi');
              }}
            >
              HI
            </button>
            <button 
              className={i18n.language === 'mr' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => {
                changeLanguage('mr');
              }}
            >
              MR
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
