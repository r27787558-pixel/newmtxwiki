import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { NavigateFn, NavTreeNode } from '../types';

function isNodeActive(node: NavTreeNode, currentPath: string): boolean {
  if (node.path === currentPath) return true;
  if (node.children) {
    if (currentPath.startsWith(`${node.path}/`)) return true;
    return node.children.some((child) => isNodeActive(child, currentPath));
  }
  return false;
}

function NavList({
  nodes,
  currentPath,
  setCurrentPath,
  openSet,
  toggleOpen,
  nested,
}: {
  nodes: NavTreeNode[];
  currentPath: string;
  setCurrentPath: NavigateFn;
  openSet: Set<string>;
  toggleOpen: (path: string) => void;
  nested?: boolean;
}) {
  return (
    <ul className={nested ? 'sidebar-list sidebar-list--nested' : 'sidebar-list'}>
      {nodes.map((node) => {
        if (node.children && node.children.length > 0) {
          const active = isNodeActive(node, currentPath);
          const open = openSet.has(node.path) || active;
          return (
            <li key={node.path} className="sidebar-item">
              <div className="sidebar-item-row">
                <a
                  href={`#/${node.path}`}
                  className={active ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPath(node.path);
                  }}
                >
                  {node.label}
                </a>
                <button
                  type="button"
                  className={`sidebar-caret ${open ? 'open' : ''}`}
                  aria-expanded={open}
                  aria-label={node.label}
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
              className={node.path === currentPath ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPath(node.path);
              }}
            >
              {node.label}
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
}: {
  currentPath: string;
  setCurrentPath: NavigateFn;
  sidebarOpen?: boolean;
}) {
  const { t } = useLanguage();
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());

  const toggleOpen = (path: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const navNodes: NavTreeNode[] = [
    { path: 'index', label: t.navHome },
    {
      path: 'meds',
      label: t.medsLabel,
      children: [
        { path: 'hrt-overview', label: t.medsOverview },
        { path: 'meds/monitoring', label: t.medsMonitoring },
        { path: 'meds/risks', label: t.medsRisks },
        {
          path: 'meds/estrogens',
          label: t.medsEstrogens,
          children: [
            { path: 'meds/estrogens/overview', label: t.estrogenOverview },
            { path: 'meds/estrogens/injection', label: t.estrogenInjection },
            { path: 'meds/estrogens/valerate', label: t.estrogenValerateTablets },
            { path: 'meds/estrogens/tablets', label: t.estrogenTablets },
            { path: 'meds/estrogens/gel', label: t.estrogenGel },
            { path: 'meds/estrogens/patch', label: t.estrogenPatch },
          ],
        },
        { path: 'meds/anti-androgens', label: t.medsAntiAndrogens },
        { path: 'meds/serms', label: t.medsSerms },
        { path: 'meds/others', label: t.estrogenOthers },
      ],
    },
    { path: 'surgery', label: t.navSurgery },
  ];

  const resourceNodes: NavTreeNode[] = [
    { path: 'survey', label: t.sidebarSurvey },
    { path: 'guide', label: t.navGuide },
    { path: 'help', label: t.navHelp },
    { path: 'disclaimer', label: t.sidebarDisclaimer },
    { path: 'contact', label: t.navContact },
    { path: 'contributors', label: t.navContributors },
  ];

  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
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
          <NavList
            nodes={navNodes}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
            openSet={openSet}
            toggleOpen={toggleOpen}
          />
        </div>

        <div className="sidebar-group">
          <div className="sidebar-group-title">{t.sidebarResourceGroup}</div>
          <NavList
            nodes={resourceNodes}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
            openSet={openSet}
            toggleOpen={toggleOpen}
          />
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
