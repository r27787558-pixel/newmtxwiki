import React, { useState } from 'react';
import HrtOverview from './HrtOverview';

export default function Meds() {
  const [subTab, setSubTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'HRT综述' },
    { id: 'monitoring', label: '用药期间的监测' },
    { id: 'risks', label: '用药风险' },
    { id: 'estrogens', label: '雌激素类药物' },
    { id: 'anti-androgens', label: '抗雄激素类药物' },
    { id: 'serms', label: '选择性雌激素受体调节剂' },
  ];

  return (
    <div className="container">
      <section className="section">
        <h1 className="big-title">药物</h1>
        <p className="subtitle">
          这里未来将用于编写和整理适合各个 MtX 群体的 HRT（激素替代治疗）科普指南。
        </p>

        <div className="sub-nav-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
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
            <div className="content">
              <p>(资料整理中，期待你的加入...)</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
