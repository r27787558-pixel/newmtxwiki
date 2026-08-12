import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer({ setCurrentPath }) {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-disclaimer">
          <strong>{t.footerDisclaimer}</strong>
          {t.footerDisclaimerText}
          <a
            href="#/disclaimer"
            className="highlight"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('disclaimer');
            }}
          >
            {t.footerReadFull}
          </a>
        </p>
        <p className="footer-meta">
          © {new Date().getFullYear()} {t.brand}           ·
          <a
            href="#/contact"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('contact');
            }}
          >
            {t.navContact}
          </a>
          ·
          <a
            href="#/contributors"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('contributors');
            }}
          >
            {t.navContributors}
          </a>
          ·
          <a
            href="#/help"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('help');
            }}
          >
            {t.footerEmergency}
          </a>
        </p>
      </div>
    </footer>
  );
}
