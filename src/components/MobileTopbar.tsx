import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { NavigateFn } from '../types';
import { HOME_PATH } from '../routes';

export default function MobileTopbar({
  setCurrentPath,
  setSidebarOpen,
  sidebarOpen,
}: {
  setCurrentPath: NavigateFn;
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div className="mobile-topbar">
      <button
        type="button"
        className="mobile-menu-btn"
        aria-label={sidebarOpen ? t.menuClose : t.menuOpen}
        aria-expanded={sidebarOpen}
        aria-controls="site-sidebar"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>
      <a
        href={`#/${HOME_PATH}`}
        className="top-right-brand"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPath(HOME_PATH);
        }}
      >
        {t.brand}
      </a>
    </div>
  );
}
