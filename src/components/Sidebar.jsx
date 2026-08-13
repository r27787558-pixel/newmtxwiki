import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

function isActive(path, currentPath) {
  return path === currentPath;
}

export default function Sidebar({ currentPath, setCurrentPath }) {
  const { t } = useLanguage();
  const [medsOpen, setMedsOpen] = useState(false);

  const medsActive = currentPath === 'meds' || currentPath.startsWith('meds/');
  const medsExpanded = medsOpen || medsActive || currentPath === 'hrt-overview';

  const navLinks = [
    { path: 'index', label: t.navHome },
    { path: 'surgery', label: t.navSurgery },
  ];

  const medsSubItems = [
    { path: 'hrt-overview', label: t.medsOverview },
    { path: 'meds/monitoring', label: t.medsMonitoring },
    { path: 'meds/risks', label: t.medsRisks },
    { path: 'meds/estrogens', label: t.medsEstrogens },
    { path: 'meds/anti-androgens', label: t.medsAntiAndrogens },
    { path: 'meds/serms', label: t.medsSerms },
  ];

  const resourceLinks = [
    { path: 'survey', label: t.sidebarSurvey },
    { path: 'guide', label: t.navGuide },
    { path: 'help', label: t.navHelp },
    { path: 'disclaimer', label: t.sidebarDisclaimer },
    { path: 'contact', label: t.navContact },
    { path: 'contributors', label: t.navContributors },
  ];

  const renderLink = (link) => (
    <a
      href={`#/${link.path}`}
      className={isActive(link.path, currentPath) ? 'active' : ''}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPath(link.path);
      }}
    >
      {link.label}
    </a>
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-mark">M</span>
        <div className="sidebar-logo-text">
          <strong>{t.brand}</strong>
          <small>{t.tagline}</small>
        </div>
      </div>
      <nav className="sidebar-nav" aria-label="site">
        <div className="sidebar-group">
          <div className="sidebar-group-title">{t.sidebarNavGroup}</div>
          <ul className="sidebar-list">
            {navLinks.slice(0, 1).map((link) => (
              <li key={link.path}>{renderLink(link)}</li>
            ))}

            <li className="sidebar-item">
              <div className="sidebar-item-row">
                <a
                  href="#/meds"
                  className={medsActive ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPath('meds');
                  }}
                >
                  {t.medsLabel}
                </a>
                <button
                  type="button"
                  className={`sidebar-caret ${medsExpanded ? 'open' : ''}`}
                  aria-expanded={medsExpanded}
                  aria-label={t.medsLabel}
                  onClick={() => setMedsOpen((v) => !v)}
                >
                  ▾
                </button>
              </div>
              {medsExpanded && (
                <ul className="sidebar-list sidebar-list--nested">
                  {medsSubItems.map((link) => (
                    <li key={link.path}>{renderLink(link)}</li>
                  ))}
                </ul>
              )}
            </li>

            {navLinks.slice(1).map((link) => (
              <li key={link.path}>{renderLink(link)}</li>
            ))}
          </ul>
        </div>

        <div className="sidebar-group">
          <div className="sidebar-group-title">{t.sidebarResourceGroup}</div>
          <ul className="sidebar-list">
            {resourceLinks.map((link) => (
              <li key={link.path}>{renderLink(link)}</li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="sidebar-footer">
        <a
          href="https://github.com/r27787558-pixel/newmtxwiki"
          target="_blank"
          rel="noreferrer"
        >
          {t.sidebarContribute}
        </a>
      </div>
    </aside>
  );
}
