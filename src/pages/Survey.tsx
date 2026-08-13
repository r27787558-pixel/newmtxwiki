import React from 'react';
import WikiArticle from '../components/WikiArticle';
import { useLanguage } from '../context/LanguageContext';

export default function Survey() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle title={zh ? '问卷调查' : 'Survey'}>
      <p>
        {zh
          ? '群体调查与数据收集页面建设中...'
          : 'Community surveys and data collection — page under construction...'}
      </p>
    </WikiArticle>
  );
}
