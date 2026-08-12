import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

const TABS = (zh) =>
  (zh
    ? [
        { id: 'monitoring', label: '用药期间的监测' },
        { id: 'risks', label: '用药风险' },
        { id: 'estrogens', label: '雌激素类药物' },
        { id: 'anti-androgens', label: '抗雄激素类药物' },
        { id: 'serms', label: '选择性雌激素受体调节剂' },
      ]
    : [
        { id: 'monitoring', label: 'Monitoring' },
        { id: 'risks', label: 'Risks' },
        { id: 'estrogens', label: 'Estrogens' },
        { id: 'anti-androgens', label: 'Anti-androgens' },
        { id: 'serms', label: 'SERMs' },
      ]);

const PLACEHOLDERS = (zh) =>
  (zh
    ? {
        monitoring: '用药期间的抽血监测频率与指标解读（总睾酮、雌二醇、肝功能、肾功能、血脂、血常规）正在整理中。',
        risks: '药物副作用、血栓风险、骨质疏松预防与安全红线内容正在整理中。',
        estrogens: '雌二醇（Estradiol）等雌激素类药物的剂量、剂型与使用说明正在整理中。',
        'anti-androgens': '醋酸环丙孕酮（CPA）、螺内酯、比卡鲁胺等抗雄激素类药物内容正在整理中。',
        serms: '雷洛昔芬（Raloxifene）等选择性雌激素受体调节剂内容正在整理中。',
      }
    : {
        monitoring: 'Blood-test frequency and interpreting key markers (total testosterone, estradiol, liver function, kidney function, blood lipids, CBC) during medication — in progress.',
        risks: 'Drug side effects, thrombosis risk, osteoporosis prevention, and safety red lines — in progress.',
        estrogens: 'Doses, formulations, and usage of estrogens such as estradiol — in progress.',
        'anti-androgens': 'Anti-androgens such as cyproterone acetate (CPA), spironolactone, and bicalutamide — in progress.',
        serms: 'Selective estrogen receptor modulators such as raloxifene — in progress.',
      });

export default function Meds() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';
  const [subTab, setSubTab] = useState('monitoring');
  const tabs = TABS(zh);
  const placeholders = PLACEHOLDERS(zh);

  return (
    <div className="wiki-article">
      <h1 className="wiki-page-title">{zh ? '药物' : 'Medications'}</h1>
      <p className="wiki-page-lead">
        {zh
          ? '这里未来将用于编写和整理适合各个 MtX 群体的 HRT（激素替代治疗）科普指南。'
          : 'This section will compile HRT (hormone replacement therapy) educational guides tailored to the MtX community.'}
      </p>
      <p className="content">
        {zh ? 'HRT 的完整综述请见 ' : 'For a full HRT overview, see '}
        <a href="#/hrt-overview">{zh ? 'HRT 指南' : 'the HRT Guide'}</a>。
      </p>

      <div className="sub-nav-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`sub-nav-btn ${subTab === tab.id ? 'active' : ''}`}
            onClick={() => setSubTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="sub-content">
        <div className="section placeholder">
          <p>
            （{placeholders[subTab]} {zh ? '期待你的加入...' : 'Your contribution is welcome...'}）
          </p>
        </div>
      </div>
    </div>
  );
}
