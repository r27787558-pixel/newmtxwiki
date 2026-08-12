import React, { createContext, useContext, useEffect, useState } from 'react';
import { UI } from '../i18n.js';

const STORAGE_KEY = 'mtxwiki-lang';

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === 'undefined') return 'zh';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') return saved;
  } catch {
    /* ignore */
  }
  const navLang = typeof navigator !== 'undefined' ? navigator.language : '';
  return navLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const setLang = (next) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === 'zh' ? 'en' : 'zh'));

  const value = {
    lang,
    setLang,
    toggleLang,
    t: UI[lang] || UI.zh,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
