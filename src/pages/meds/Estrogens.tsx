import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import EstrogenOverview from './EstrogenOverview';

type TabItem = { id: string; label: string };

export default function Estrogens() {
  const { lang, t } = useLanguage();
  const zh = lang === 'zh';
  const [sub, setSub] = useState('overview');

  const items: TabItem[] = [
    { id: 'overview', label: t.estrogenOverview },
    { id: 'injection', label: t.estrogenInjection },
    { id: 'valerate', label: t.estrogenValerateTablets },
    { id: 'tablets', label: t.estrogenTablets },
    { id: 'gel', label: t.estrogenGel },
    { id: 'patch', label: t.estrogenPatch },
    { id: 'others', label: t.estrogenOthers },
  ];

  const placeholders: Record<string, string> = {
    injection: zh ? '雌二醇针剂（注射剂）的剂型、剂量与使用说明正在整理中。' : 'Formulations, doses, and usage of estradiol injections — in progress.',
    valerate: zh ? '戊酸雌二醇片的剂量、用法与注意事项正在整理中。' : 'Doses, usage, and cautions for estradiol valerate tablets — in progress.',
    tablets: zh ? '雌二醇片的剂量、用法与注意事项正在整理中。' : 'Doses, usage, and cautions for estradiol tablets — in progress.',
    gel: zh ? '雌二醇凝胶的用法、涂抹部位与吸收特点正在整理中。' : 'Usage, application sites, and absorption of estradiol gel — in progress.',
    patch: zh ? '雌二醇贴片的使用方法、更换周期与注意事项正在整理中。' : 'Usage, change schedule, and cautions for estradiol patches — in progress.',
    others: zh ? '其他相关药物与补充说明正在整理中。' : 'Other related medications and supplementary notes — in progress.',
  };

  return (
    <div>
      <div className="sub-nav-bar sub-nav-bar--secondary">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sub-nav-btn ${sub === item.id ? 'active' : ''}`}
            onClick={() => setSub(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="sub-content">
        {sub === 'overview' && <EstrogenOverview />}
        {sub !== 'overview' && (
          <div className="section placeholder">
            <p>（{placeholders[sub]} {zh ? '期待你的加入...' : 'Your contribution is welcome...'}）</p>
          </div>
        )}
      </div>
    </div>
  );
}
