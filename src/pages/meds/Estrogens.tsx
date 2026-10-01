import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SubNav from '../../components/SubNav';
import Placeholder from '../../components/Placeholder';
import EstrogenOverview from './EstrogenOverview';
import type { NavigateFn } from '../../types';

type TabItem = { id: string; label: string };

const ITEM_IDS = ['overview', 'injection', 'valerate', 'tablets', 'gel', 'patch'];

const PLACEHOLDERS = (zh: boolean): Record<string, string> => ({
  injection: zh
    ? '雌二醇针剂（注射剂）的剂型、剂量与使用说明正在整理中。'
    : 'Formulations, doses, and usage of estradiol injections — in progress.',
  valerate: zh
    ? '戊酸雌二醇片的剂量、用法与注意事项正在整理中。'
    : 'Doses, usage, and cautions for estradiol valerate tablets — in progress.',
  tablets: zh
    ? '雌二醇片的剂量、用法与注意事项正在整理中。'
    : 'Doses, usage, and cautions for estradiol tablets — in progress.',
  gel: zh
    ? '雌二醇凝胶的用法、涂抹部位与吸收特点正在整理中。'
    : 'Usage, application sites, and absorption of estradiol gel — in progress.',
  patch: zh
    ? '雌二醇贴片的使用方法、更换周期与注意事项正在整理中。'
    : 'Usage, change schedule, and cautions for estradiol patches — in progress.',
});

export default function Estrogens({
  subTab = 'overview',
  setCurrentPath,
}: {
  subTab?: string;
  setCurrentPath: NavigateFn;
}) {
  const { lang, t } = useLanguage();
  const zh = lang === 'zh';

  const items: TabItem[] = [
    { id: 'overview', label: t.estrogenOverview },
    { id: 'injection', label: t.estrogenInjection },
    { id: 'valerate', label: t.estrogenValerateTablets },
    { id: 'tablets', label: t.estrogenTablets },
    { id: 'gel', label: t.estrogenGel },
    { id: 'patch', label: t.estrogenPatch },
  ];

  const active = ITEM_IDS.includes(subTab) ? subTab : 'overview';
  const placeholders = PLACEHOLDERS(zh);

  return (
    <div>
      <SubNav
        items={items}
        active={active}
        basePath="meds/estrogens"
        setCurrentPath={setCurrentPath}
        secondary
        ariaLabel={t.medsEstrogens}
      />
      <div className="sub-content">
        {active === 'overview' ? (
          <EstrogenOverview />
        ) : (
          <Placeholder text={placeholders[active]} onNavigate={setCurrentPath} />
        )}
      </div>
    </div>
  );
}
