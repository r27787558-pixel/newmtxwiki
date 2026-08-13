import React from 'react';
import WikiArticle from '../components/WikiArticle';
import { useLanguage } from '../context/LanguageContext';

export default function Guide() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle title={zh ? '生活指南' : 'Life Guide'}>
      <p>
        {zh
          ? '日常生活与社会支持相关指南页面建设中...'
          : 'Guides for everyday life and social support — page under construction...'}
      </p>
    </WikiArticle>
  );
}
