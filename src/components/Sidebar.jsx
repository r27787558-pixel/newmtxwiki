import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

const NAV_GROUPS = (t) => [
  {
    label: t.sidebarNavGroup,
    links: [
      { path: 'index', label: t.navHome },
      { path: 'hrt-overview', label: t.sidebarHrt },
      { path: 'meds', label: t.medsLabel },
      { path: 'surgery', label: t.navSurgery },
    ],
  },
  {
    label: t.sidebarResourceGroup,
    links: [
      { path: 'survey', label: t.sidebarSurvey },
      { path: 'guide', label: t.navGuide },
      { path: 'help', label: t.navHelp },
      { path: 'disclaimer', label: t.sidebarDisclaimer },
      { path: 'contact', label: t.navContact },
      { path: 'contributors', label: t.navContributors },
    ],
  },
];

function isActive(path, currentPath) {
  if (path === currentPath) return true;
  if (path === 'hrt-overview' && currentPath === 'meds') return true;
  return false;
}

export default function Sidebar({ currentPath, setCurrentPath }) {
  const { t } = useLanguage();

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
        {NAV_GROUPS(t).map((group) => (
          <div className="sidebar-group" key={group.label}>
            <div className="sidebar-group-title">{group.label}</div>
            <ul className="sidebar-list">
              {group.links.map((link) => (
                <li key={link.path}>
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
                </li>
              ))}
            </ul>
          </div>
        ))}
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
