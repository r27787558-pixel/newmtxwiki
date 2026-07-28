import React from 'react';

export default function Header({ currentPath, setCurrentPath }) {
  const navItems = [
    { id: 'index', label: '首页' },
    { id: 'meds', label: '药物' },
    { id: 'hrt-overview', label: 'HRT指南' },
    { id: 'survey', label: '调查' },
    { id: 'guide', label: '生活指南' },
    { id: 'help', label: '救助' },
  ];

  return (
    <header className="header-nav">
      <a
        href="#index"
        className="top-right-brand"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPath('index');
        }}
      >
        MtX.wiki
      </a>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={currentPath === item.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

