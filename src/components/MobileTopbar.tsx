import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { NavigateFn } from '../types';

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
        aria-label={t.navMeds}
        aria-expanded={sidebarOpen}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>
      <a
        href="#/index"
        className="top-right-brand"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPath('index');
        }}
      >
        {t.brand}
      </a>
    </div>
  );
}
