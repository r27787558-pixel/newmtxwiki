import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import type { NavigateFn, NavLink } from '../types';

export default function Header({ currentPath, setCurrentPath }: { currentPath: string; setCurrentPath: NavigateFn }) {
  const { t, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [showMedsDropdown, setShowMedsDropdown] = useState(false);

  const isMedsActive = currentPath === 'meds' || currentPath.startsWith('meds/');

  const isSubActive = (itemPath: string) =>
    currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);

  const navigate = (path: string) => {
    setCurrentPath(path);
    setShowMedsDropdown(false);
  };

  const links: NavLink[] = [
    { path: 'surgery', label: t.navSurgery },
    { path: 'survey', label: t.navSurvey },
    { path: 'guide', label: t.navGuide },
    { path: 'help', label: t.navHelp },
    { path: 'disclaimer', label: t.navDisclaimer },
    { path: 'contact', label: t.navContact },
    { path: 'contributors', label: t.navContributors },
  ];

  const medsSubItems: NavLink[] = [
    { path: 'meds', label: t.medsInfo },
    { path: 'hrt-overview', label: t.medsOverview },
    { path: 'meds/monitoring', label: t.medsMonitoring },
    { path: 'meds/risks', label: t.medsRisks },
    { path: 'meds/estrogens', label: t.medsEstrogens },
    { path: 'meds/anti-androgens', label: t.medsAntiAndrogens },
    { path: 'meds/serms', label: t.medsSerms },
    { path: 'meds/others', label: t.estrogenOthers },
  ];

  return (
    <header className="header-nav">
      <a
        href="#/index"
        className="top-right-brand"
        onClick={(e) => {
          e.preventDefault();
          navigate('index');
        }}
      >
        {t.brand}
      </a>
      <nav className="nav-links">
        <a
          href="#/index"
          className={currentPath === 'index' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            navigate('index');
          }}
        >
          {t.navHome}
        </a>

        <div
          className="nav-dropdown-container"
          onMouseEnter={() => setShowMedsDropdown(true)}
          onMouseLeave={() => setShowMedsDropdown(false)}
        >
          <a
            href="#/meds"
            className={isMedsActive ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              navigate('meds');
            }}
          >
            {t.medsLabel}
          </a>
          <button
            type="button"
            className="dropdown-caret"
            aria-label={t.medsLabel}
            aria-haspopup="true"
            aria-expanded={showMedsDropdown}
            onClick={() => setShowMedsDropdown((v) => !v)}
          >
            ▾
          </button>
          {showMedsDropdown && (
            <div className="dropdown-menu">
              {medsSubItems.map((item) => (
                <a
                  key={item.path}
                  href={`#/${item.path}`}
                  className={isSubActive(item.path) ? 'sub-active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.path);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {links.map((link) => (
          <a
            key={link.path}
            href={`#/${link.path}`}
            className={currentPath === link.path ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              navigate(link.path);
            }}
          >
            {link.label}
          </a>
        ))}

        <div className="header-actions">
          <button
            type="button"
            className="header-icon-btn"
            aria-label={theme === 'light' ? t.themeToggleToDark : t.themeToggleToLight}
            title={theme === 'light' ? t.themeToggleToDark : t.themeToggleToLight}
            onClick={toggleTheme}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <button type="button" className="header-icon-btn lang-btn" onClick={toggleLang}>
            {t.langSwitchToEn}
          </button>
        </div>
      </nav>
    </header>
  );
}
