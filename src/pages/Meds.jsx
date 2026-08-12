import React, { useState } from 'react';
import HrtOverview from './HrtOverview';

const TABS = [
  { id: 'overview', label: 'HRT综述' },
  { id: 'monitoring', label: '用药期间的监测' },
  { id: 'risks', label: '用药风险' },
  { id: 'estrogens', label: '雌激素类药物' },
  { id: 'anti-androgens', label: '抗雄激素类药物' },
  { id: 'serms', label: '选择性雌激素受体调节剂' },
];

const PLACEHOLDERS = {
  monitoring: '用药期间的抽血监测频率与指标解读（总睾酮、雌二醇、肝功能、肾功能、血脂、血常规）正在整理中。',
  risks: '药物副作用、血栓风险、骨质疏松预防与安全红线内容正在整理中。',
  estrogens: '雌二醇（Estradiol）等雌激素类药物的剂量、剂型与使用说明正在整理中。',
  'anti-androgens': '醋酸环丙孕酮（CPA）、螺内酯、比卡鲁胺等抗雄激素类药物内容正在整理中。',
  serms: '雷洛昔芬（Raloxifene）等选择性雌激素受体调节剂内容正在整理中。',
};

export default function Meds() {
  const [subTab, setSubTab] = useState('overview');

  return (
    <div className="wiki-article">
      <h1 className="wiki-page-title">药物</h1>
      <p className="wiki-page-lead">
        这里未来将用于编写和整理适合各个 MtX 群体的 HRT（激素替代治疗）科普指南。
      </p>

      <div className="sub-nav-bar">
        {TABS.map((tab) => (
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
        {subTab === 'overview' && <HrtOverview />}
        {subTab !== 'overview' && (
          <div className="section placeholder">
            <p>（{PLACEHOLDERS[subTab]} 期待你的加入...）</p>
          </div>
        )}
      </div>
    </div>
  );
}
