import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Estrogens from './meds/Estrogens';
import type { NavigateFn } from '../types';

type TabItem = { id: string; label: string };

const TAB_IDS = ['monitoring', 'risks', 'estrogens', 'anti-androgens', 'serms', 'others'];

const PLACEHOLDERS = (zh: boolean): Record<string, string> =>
  zh
    ? {
        monitoring: '用药期间的抽血监测频率与指标解读（总睾酮、雌二醇、肝功能、肾功能、血脂、血常规）正在整理中。',
        risks: '药物副作用、血栓风险、骨质疏松预防与安全红线内容正在整理中。',
        'anti-androgens': '醋酸环丙孕酮（CPA）、螺内酯、比卡鲁胺等抗雄激素类药物内容正在整理中。',
        serms: '雷洛昔芬（Raloxifene）等选择性雌激素受体调节剂内容正在整理中。',
        others: '其它相关药物与补充说明正在整理中。',
      }
    : {
        monitoring: 'Blood-test frequency and interpreting key markers (total testosterone, estradiol, liver function, kidney function, blood lipids, CBC) during medication — in progress.',
        risks: 'Drug side effects, thrombosis risk, osteoporosis prevention, and safety red lines — in progress.',
        'anti-androgens': 'Anti-androgens such as cyproterone acetate (CPA), spironolactone, and bicalutamide — in progress.',
        serms: 'Selective estrogen receptor modulators such as raloxifene — in progress.',
        others: 'Other related medications and supplementary notes — in progress.',
      };

export default function Meds({
  subTab = 'monitoring',
  subSubTab,
  setCurrentPath,
}: {
  subTab?: string;
  subSubTab?: string;
  setCurrentPath: NavigateFn;
}) {
  const { lang, t } = useLanguage();
  const zh = lang === 'zh';

  const tabs: TabItem[] = [
    { id: 'monitoring', label: t.medsMonitoring },
    { id: 'risks', label: t.medsRisks },
    { id: 'estrogens', label: t.medsEstrogens },
    { id: 'anti-androgens', label: t.medsAntiAndrogens },
    { id: 'serms', label: t.medsSerms },
    { id: 'others', label: t.estrogenOthers },
  ];

  const active = TAB_IDS.includes(subTab) ? subTab : 'monitoring';
  const placeholders = PLACEHOLDERS(zh);

  return (
    <div className="wiki-article">
      <h1 className="wiki-page-title">{t.medsLabel}</h1>
      <p className="wiki-page-lead">{t.medsLead}</p>

      <div className="sub-nav-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`sub-nav-btn ${active === tab.id ? 'active' : ''}`}
            onClick={() => setCurrentPath(`meds/${tab.id}`)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="sub-content">
        {active === 'estrogens' && (
          <Estrogens subTab={subSubTab || 'overview'} setCurrentPath={setCurrentPath} />
        )}
        {active !== 'estrogens' && (
          <div className="section placeholder">
            <p>
              （{placeholders[active]} {zh ? '期待你的加入...' : 'Your contribution is welcome...'}）
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
