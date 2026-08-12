import React from 'react';
import WikiArticle from '../components/WikiArticle.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Help() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle title={zh ? '救助资源' : 'Help Resources'}>
      <p>
        {zh
          ? '紧急救助与求助渠道页面建设中...'
          : 'Emergency assistance and support channels — page under construction...'}
      </p>
    </WikiArticle>
  );
}
