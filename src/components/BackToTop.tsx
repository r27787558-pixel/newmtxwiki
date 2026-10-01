import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SHOW_AFTER_PX = 480;

/** 滚动一定距离后出现的「回到顶部」浮动按钮。 */
export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' show' : ''}`}
      aria-label={t.backToTop}
      title={t.backToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}
