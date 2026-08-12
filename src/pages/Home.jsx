import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

const CARDS = (zh) =>
  (zh
    ? [
        { path: 'hrt-overview', title: 'HRT 指南', desc: '面向 MtX 群体的激素替代治疗科学综述。', tag: '已上线' },
        { path: 'meds', title: '药物', desc: '雌激素、抗雄激素与 SERMs 等用药分类、监测与风险。', tag: '建设中' },
        { path: 'surgery', title: '手术', desc: '性别无效化等手术资讯与经验分享。', tag: '建设中' },
        { path: 'guide', title: '生活指南', desc: '日常生活与社会支持相关指南。', tag: '建设中' },
        { path: 'survey', title: '调查问卷', desc: '群体调查与数据收集。', tag: '建设中' },
        { path: 'help', title: '紧急救助', desc: '紧急救助与求助渠道。', tag: '建设中' },
      ]
    : [
        { path: 'hrt-overview', title: 'HRT Guide', desc: 'A scientific overview of hormone replacement therapy for the MtX community.', tag: 'Live' },
        { path: 'meds', title: 'Medications', desc: 'Estrogens, anti-androgens, SERMs and more — drug classes, monitoring and risks.', tag: 'WIP' },
        { path: 'surgery', title: 'Surgery', desc: 'Gender nullification surgery information and experience sharing.', tag: 'WIP' },
        { path: 'guide', title: 'Life Guide', desc: 'Guides for everyday life and social support.', tag: 'WIP' },
        { path: 'survey', title: 'Survey', desc: 'Community surveys and data collection.', tag: 'WIP' },
        { path: 'help', title: 'Emergency Help', desc: 'Emergency assistance and support channels.', tag: 'WIP' },
      ]);

export default function Home({ setCurrentPath }) {
  const { lang } = useLanguage();
  const zh = lang === 'zh';
  const cards = CARDS(zh);

  return (
    <div className="wiki-home">
      <h1 className="wiki-page-title">
        {zh ? '欢迎来到 MtX.wiki' : 'Welcome to MtX.wiki'}
      </h1>
      <p className="wiki-page-lead">
        {zh
          ? 'MtX（Male-to-X），男性向非二元跨性别者，是指出生时指派性别是男性，但自我认同不完全是女性、也不完全是男性的跨性别者。'
          : 'MtX (Male-to-X) refers to transgender people who were assigned male at birth but do not identify entirely as female or entirely as male.'}
      </p>

      <section className="section">
        <h2>{zh ? '关于本站' : 'About this site'}</h2>
        <div className="content">
          <p>
            {zh
              ? '你好，欢迎来到 mtx.wiki，这里是一个期待以后能够给 MtX 群体提供帮助的站点。'
              : 'Hello, welcome to mtx.wiki — a site we hope will provide help to the MtX community in the future.'}
          </p>
          <p>
            {zh
              ? '中性/非二元倾向跨性别者（Transneutral/Transmasculine/Transfeminine non-binary）则涵盖了更广泛的、脱离传统二元性别框架的非常规性别者。'
              : 'Transneutral/Transmasculine/Transfeminine non-binary covers an even broader range of gender experiences beyond the traditional binary framework.'}
          </p>
          <p>
            {zh
              ? '现在该站处于开始阶段（没任何人，也没任何资料），希望有人可以帮助一同建立该站，有意者请加 Q 2132248873。'
              : 'The site is still in its early stage (no members, no content yet). We hope someone can help build it together. Interested? Contact us via QQ 2132248873.'}
          </p>
        </div>
      </section>

      <section className="section">
        <h2>{zh ? '站点地图' : 'Sitemap'}</h2>
        <div className="card-grid">
          {cards.map((card) => (
            <a
              key={card.path}
              className="card-link"
              href={`#/${card.path}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPath(card.path);
              }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className="card-tag">{card.tag}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{zh ? '我们的愿景' : 'Our vision'}</h2>
        <div className="content">
          <p>
            {zh ? '这里希望写一个适合各个 MtX 的' : 'Here we hope to write an '}
            <a
              href="#/hrt-overview"
              className="highlight"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPath('hrt-overview');
              }}
            >
              {zh ? 'HRT 指南' : 'HRT guide'}
            </a>
            {zh
              ? '，以及生活指南，其它打算给大家一个交友、娱乐的站点。'
              : ' suitable for every MtX, as well as a life guide, and eventually a place for making friends and entertainment.'}
          </p>
        </div>
      </section>
    </div>
  );
}
