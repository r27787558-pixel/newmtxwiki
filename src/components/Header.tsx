import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import type { NavigateFn } from '../types';
import {
  HEADER_DROPDOWN_PATH,
  HEADER_LINKS,
  HEADER_MEDS_MENU,
  HOME_PATH,
  isNodeActive,
  isPathActive,
} from '../routes';

export default function Header({
  currentPath,
  setCurrentPath,
}: {
  currentPath: string;
  setCurrentPath: NavigateFn;
}) {
  const { lang, t, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [showMedsDropdown, setShowMedsDropdown] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // 把顶栏实际高度写进 CSS 变量，供 .sidebar 的吸顶偏移使用
  useEffect(() => {
    const el = headerRef.current;
    const root = document.documentElement;
    const sync = () => root.style.setProperty('--header-h', `${el?.offsetHeight ?? 0}px`);
    sync();
    if (!el || typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', sync);
      return () => {
        window.removeEventListener('resize', sync);
        root.style.removeProperty('--header-h');
      };
    }
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.removeProperty('--header-h');
    };
  }, []);

  const isMedsActive = isNodeActive(
    { path: HEADER_DROPDOWN_PATH, labelKey: 'medsLabel' },
    currentPath,
  );

  // 路由变化后收起下拉
  useEffect(() => {
    setShowMedsDropdown(false);
  }, [currentPath]);

  const navigate = (path: string) => {
    setCurrentPath(path);
    setShowMedsDropdown(false);
  };

  const themeLabel = theme === 'light' ? t.themeToggleToDark : t.themeToggleToLight;
  const langLabel = lang === 'zh' ? t.langSwitchToEn : t.langSwitchToZh;

  return (
    <header className="header-nav" ref={headerRef}>
      <a
        href={`#/${HOME_PATH}`}
        className="top-right-brand"
        onClick={(e) => {
          e.preventDefault();
          navigate(HOME_PATH);
        }}
      >
        {t.brand}
      </a>
      <nav className="nav-links" aria-label={t.sidebarNavGroup}>
        <a
          href={`#/${HOME_PATH}`}
          className={currentPath === HOME_PATH ? 'active' : ''}
          aria-current={currentPath === HOME_PATH ? 'page' : undefined}
          onClick={(e) => {
            e.preventDefault();
            navigate(HOME_PATH);
          }}
        >
          {t.navHome}
        </a>

        <div
          className="nav-dropdown-container"
          onMouseEnter={() => setShowMedsDropdown(true)}
          onMouseLeave={() => setShowMedsDropdown(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setShowMedsDropdown(false);
          }}
        >
          <a
            href={`#/${HEADER_DROPDOWN_PATH}`}
            className={isMedsActive ? 'active' : ''}
            aria-current={isMedsActive ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              navigate(HEADER_DROPDOWN_PATH);
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
              {HEADER_MEDS_MENU.map((item) => {
                const active = item.path === HEADER_DROPDOWN_PATH
                  ? currentPath === item.path
                  : isPathActive(item.path, currentPath);
                return (
                  <a
                    key={item.path}
                    href={`#/${item.path}`}
                    className={active ? 'sub-active' : ''}
                    aria-current={active ? 'page' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.path);
                    }}
                  >
                    {t[item.labelKey]}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {HEADER_LINKS.map((link) => {
          const active = isPathActive(link.path, currentPath);
          return (
            <a
              key={link.path}
              href={`#/${link.path}`}
              className={active ? 'active' : ''}
              aria-current={active ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigate(link.path);
              }}
            >
              {t[link.labelKey]}
            </a>
          );
        })}

        <div className="header-actions">
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
      </nav>
    </header>
  );
}
