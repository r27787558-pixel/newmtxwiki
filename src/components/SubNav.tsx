import React from 'react';
import type { NavigateFn } from '../types';

export interface SubNavItem {
  id: string;
  label: string;
}

/**
 * 二级/三级分类切换条。Meds 与 Estrogens 共用，避免两处重复的按钮渲染逻辑。
 * 用 <a href="#/..."> 而非 <button>，这样支持中键新开标签页与复制链接。
 */
export default function SubNav({
  items,
  active,
  basePath,
  setCurrentPath,
  secondary = false,
  ariaLabel,
}: {
  items: SubNavItem[];
  active: string;
  basePath: string;
  setCurrentPath: NavigateFn;
  secondary?: boolean;
  ariaLabel?: string;
}) {
  return (
    <nav
      className={`sub-nav-bar${secondary ? ' sub-nav-bar--secondary' : ''}`}
      aria-label={ariaLabel}
    >
      {items.map((item) => {
        const path = `${basePath}/${item.id}`;
        const isActive = item.id === active;
        return (
          <a
            key={item.id}
            href={`#/${path}`}
            className={`sub-nav-btn${isActive ? ' active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath(path);
            }}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
