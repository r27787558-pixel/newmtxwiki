import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SubNav from '../../components/SubNav';
import EstrogenOverview from './EstrogenOverview';
import EstradiolInjection from './EstradiolInjection';
import EstradiolValerateTablets from './EstradiolValerateTablets';
import EstradiolTablets from './EstradiolTablets';
import EstradiolGel from './EstradiolGel';
import EstradiolPatch from './EstradiolPatch';
import type { NavigateFn } from '../../types';

type TabItem = { id: string; label: string };

const ITEM_IDS = ['overview', 'injection', 'valerate', 'tablets', 'gel', 'patch'];

export default function Estrogens({
  subTab = 'overview',
  setCurrentPath,
}: {
  subTab?: string;
  setCurrentPath: NavigateFn;
}) {
  const { t } = useLanguage();

  const items: TabItem[] = [
    { id: 'overview', label: t.estrogenOverview },
    { id: 'injection', label: t.estrogenInjection },
    { id: 'valerate', label: t.estrogenValerateTablets },
    { id: 'tablets', label: t.estrogenTablets },
    { id: 'gel', label: t.estrogenGel },
    { id: 'patch', label: t.estrogenPatch },
  ];

  const active = ITEM_IDS.includes(subTab) ? subTab : 'overview';

  const content = () => {
    switch (active) {
      case 'injection':
        return <EstradiolInjection />;
      case 'valerate':
        return <EstradiolValerateTablets />;
      case 'tablets':
        return <EstradiolTablets />;
      case 'gel':
        return <EstradiolGel />;
      case 'patch':
        return <EstradiolPatch />;
      default:
        return <EstrogenOverview />;
    }
  };

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
      <div className="sub-content">{content()}</div>
    </div>
  );
}
