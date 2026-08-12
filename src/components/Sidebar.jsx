import React from 'react';

const NAV_GROUPS = [
  {
    label: '导航',
    links: [
      { path: 'index', label: '首页' },
      { path: 'hrt-overview', label: 'HRT 指南' },
      { path: 'meds', label: '药物' },
      { path: 'surgery', label: '手术' },
    ],
  },
  {
    label: '资源',
    links: [
      { path: 'survey', label: '调查问卷' },
      { path: 'guide', label: '生活指南' },
      { path: 'help', label: '紧急救助' },
      { path: 'disclaimer', label: '医学声明' },
    ],
  },
];

function isActive(path, currentPath) {
  if (path === currentPath) return true;
  if (path === 'hrt-overview' && currentPath === 'meds') return true;
  return false;
}

export default function Sidebar({ currentPath, setCurrentPath }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-mark">M</span>
        <div className="sidebar-logo-text">
          <strong>MtX.wiki</strong>
          <small>知识库</small>
        </div>
      </div>
      <nav className="sidebar-nav" aria-label="站点导航">
        {NAV_GROUPS.map((group) => (
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
          在 GitHub 上贡献
        </a>
      </div>
    </aside>
  );
}
