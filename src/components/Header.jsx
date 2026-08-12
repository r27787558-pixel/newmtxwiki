import React, { useState } from 'react';

export default function Header({ currentPath, setCurrentPath }) {
  const [showMedsDropdown, setShowMedsDropdown] = useState(false);

  const isMedsActive = currentPath === 'meds' || currentPath === 'hrt-overview';

  const navigate = (path) => {
    setCurrentPath(path);
    setShowMedsDropdown(false);
  };

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
        MtX.wiki
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
          首页
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
            药物
          </a>
          <button
            type="button"
            className="dropdown-caret"
            aria-label="展开药物子菜单"
            aria-haspopup="true"
            aria-expanded={showMedsDropdown}
            onClick={() => setShowMedsDropdown((v) => !v)}
          >
            ▾
          </button>
          {showMedsDropdown && (
            <div className="dropdown-menu">
              <a
                href="#/meds"
                className={currentPath === 'meds' ? 'sub-active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('meds');
                }}
              >
                药物信息
              </a>
              <a
                href="#/hrt-overview"
                className={currentPath === 'hrt-overview' ? 'sub-active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('hrt-overview');
                }}
              >
                HRT指南（综述）
              </a>
            </div>
          )}
        </div>

        <a
          href="#/surgery"
          className={currentPath === 'surgery' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            navigate('surgery');
          }}
        >
          手术
        </a>

        <a
          href="#/survey"
          className={currentPath === 'survey' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            navigate('survey');
          }}
        >
          调查
        </a>

        <a
          href="#/guide"
          className={currentPath === 'guide' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            navigate('guide');
          }}
        >
          生活指南
        </a>

        <a
          href="#/help"
          className={currentPath === 'help' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            navigate('help');
          }}
        >
          救助
        </a>

        <a
          href="#/disclaimer"
          className={currentPath === 'disclaimer' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            navigate('disclaimer');
          }}
        >
          医学声明
        </a>
      </nav>
    </header>
  );
}
