import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { NavigateFn } from '../types';

/** 未知 hash 路由的兜底页，替代此前「静默显示首页」的行为。 */
export default function NotFound({ setCurrentPath }: { setCurrentPath: NavigateFn }) {
  const { lang, t } = useLanguage();
  const zh = lang === 'zh';

  return (
    <div className="wiki-article not-found">
      <h1 className="wiki-page-title">{t.notFoundTitle}</h1>
      <div className="section">
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <p>{t.notFoundDesc}</p>
        <p className="not-found-links">
          <a
            href="#/index"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('index');
            }}
          >
            {t.notFoundBack}
          </a>
          <a
            href="#/contributors"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('contributors');
            }}
          >
            {zh ? '贡献者名单' : 'Contributors'}
          </a>
          <a
            href="#/contact"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPath('contact');
            }}
          >
            {zh ? '反馈问题' : 'Report an issue'}
          </a>
        </p>
      </div>
    </div>
  );
}
