import React from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * 统一的「建设中」占位块：带徽标、说明文字与参与贡献入口，
 * 替换此前各页面各写一份的 <div className="section placeholder">。
 */
export default function Placeholder({
  text,
  onNavigate,
}: {
  text: string;
  onNavigate?: (path: string) => void;
}) {
  const { t } = useLanguage();

  return (
    <div className="section placeholder">
      <span className="placeholder-badge">{t.wipTitle}</span>
      <p className="placeholder-text">{text}</p>
      <p className="placeholder-hint">
        {t.wipHint}{' '}
        <a
          href="#/contributors"
          className="placeholder-cta"
          onClick={(e) => {
            if (!onNavigate) return;
            e.preventDefault();
            onNavigate('contributors');
          }}
        >
          {t.wipCta}
        </a>
      </p>
    </div>
  );
}
