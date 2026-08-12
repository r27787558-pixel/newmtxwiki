import React from 'react';
import WikiArticle from '../components/WikiArticle.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Surgery() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle title={zh ? '手术相关' : 'Surgery'}>
      <p>
        {zh
          ? '性别无效化、双性别与相关手术资讯、经验分享页面建设中...'
          : 'Gender nullification, bigender, and related surgery information and experience sharing — page under construction...'}
      </p>
    </WikiArticle>
  );
}
