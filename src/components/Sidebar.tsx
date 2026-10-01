import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import type { NavigateFn } from '../types';
import { NAV_GROUPS, isNodeActive, type NavNode } from '../routes';

function NavList({
  nodes,
  currentPath,
  setCurrentPath,
  openSet,
  toggleOpen,
  nested,
}: {
  nodes: NavNode[];
  currentPath: string;
  setCurrentPath: NavigateFn;
  openSet: Set<string>;
  toggleOpen: (path: string) => void;
  nested?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <ul className={nested ? 'sidebar-list sidebar-list--nested' : 'sidebar-list'}>
      {nodes.map((node) => {
        const label = t[node.labelKey];
        const selfActive = node.path === currentPath;
        const active = isNodeActive(node, currentPath);

        if (node.children && node.children.length > 0) {
          const open = openSet.has(node.path) || active;
          return (
            <li key={node.path} className="sidebar-item">
              <div className="sidebar-item-row">
                <a
                  href={`#/${node.path}`}
                  className={selfActive ? 'active' : ''}
                  aria-current={selfActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPath(node.path);
                  }}
                >
                  {label}
                </a>
                <button
                  type="button"
                  className={`sidebar-caret ${open ? 'open' : ''}`}
                  aria-expanded={open}
                  aria-label={label}
                  onClick={() => toggleOpen(node.path)}
                >
                  ▾
                </button>
              </div>
              {open && (
                <NavList
                  nodes={node.children}
                  currentPath={currentPath}
                  setCurrentPath={setCurrentPath}
                  openSet={openSet}
                  toggleOpen={toggleOpen}
                  nested
                />
              )}
            </li>
          );
        }

        return (
          <li key={node.path}>
            <a
              href={`#/${node.path}`}
              className={selfActive ? 'active' : ''}
              aria-current={selfActive ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPath(node.path);
              }}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({
  currentPath,
  setCurrentPath,
  sidebarOpen,
  setSidebarOpen,
}: {
  currentPath: string;
  setCurrentPath: NavigateFn;
  sidebarOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
}) {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());

  const toggleOpen = (path: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const themeLabel = theme === 'light' ? t.themeToggleToDark : t.themeToggleToLight;
  const langLabel = lang === 'zh' ? t.langSwitchToEn : t.langSwitchToZh;

  return (
    <aside
      id="site-sidebar"
      className={`sidebar ${sidebarOpen ? 'open' : ''}`}
      aria-label={t.sidebarNavGroup}
    >
      <div className="sidebar-logo">
        <span className="sidebar-logo-mark" aria-hidden="true">
          M
        </span>
        <div className="sidebar-logo-text">
          <strong>{t.brand}</strong>
          <small>{t.tagline}</small>
        </div>
        {setSidebarOpen && (
          <button
            type="button"
            className="sidebar-close"
            aria-label={t.menuClose}
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        )}
      </div>

      <div className="sidebar-actions">
        <button
          type="button"
          className="header-icon-btn"
          aria-label={themeLabel}
          title={themeLabel}
          onClick={toggleTheme}
        >
          {theme === 'light' ? '☾' : '☀'}
        </button>
        <button
          type="button"
          className="header-icon-btn lang-btn"
          aria-label={langLabel}
          title={langLabel}
          lang={lang === 'zh' ? 'en' : 'zh-CN'}
          onClick={toggleLang}
        >
          {langLabel}
        </button>
      </div>

      <nav className="sidebar-nav">
        {NAV_GROUPS.map((group) => (
          <div className="sidebar-group" key={group.titleKey}>
            <div className="sidebar-group-title">{t[group.titleKey]}</div>
            <NavList
              nodes={group.nodes}
              currentPath={currentPath}
              setCurrentPath={setCurrentPath}
              openSet={openSet}
              toggleOpen={toggleOpen}
            />
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a href="https://github.com/r27787558-pixel/newmtxwiki" target="_blank" rel="noreferrer">
          {t.sidebarContribute}
        </a>
      </div>
    </aside>
  );
}
