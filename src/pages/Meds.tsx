import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SubNav from '../components/SubNav';
import Estrogens from './meds/Estrogens';
import Monitoring from './meds/Monitoring';
import MedRisks from './meds/MedRisks';
import AntiAndrogens from './meds/AntiAndrogens';
import Serms from './meds/Serms';
import OtherMeds from './meds/OtherMeds';
import type { NavigateFn } from '../types';

type TabItem = { id: string; label: string };

const TAB_IDS = ['monitoring', 'risks', 'estrogens', 'anti-androgens', 'serms', 'others'];

export default function Meds({
  subTab = 'monitoring',
  subSubTab,
  setCurrentPath,
}: {
  subTab?: string;
  subSubTab?: string;
  setCurrentPath: NavigateFn;
}) {
  const { t } = useLanguage();

  const tabs: TabItem[] = [
    { id: 'monitoring', label: t.medsMonitoring },
    { id: 'risks', label: t.medsRisks },
    { id: 'estrogens', label: t.medsEstrogens },
    { id: 'anti-androgens', label: t.medsAntiAndrogens },
    { id: 'serms', label: t.medsSerms },
    { id: 'others', label: t.estrogenOthers },
  ];

  const active = TAB_IDS.includes(subTab) ? subTab : 'monitoring';

  const content = () => {
    switch (active) {
      case 'estrogens':
        return <Estrogens subTab={subSubTab || 'overview'} setCurrentPath={setCurrentPath} />;
      case 'risks':
        return <MedRisks />;
      case 'anti-androgens':
        return <AntiAndrogens />;
      case 'serms':
        return <Serms />;
      case 'others':
        return <OtherMeds />;
      default:
        return <Monitoring />;
    }
  };

  return (
    <div className="wiki-article">
      <h1 className="wiki-page-title">{t.medsLabel}</h1>
      <p className="wiki-page-lead">{t.medsLead}</p>

      <SubNav
        items={tabs}
        active={active}
        basePath="meds"
        setCurrentPath={setCurrentPath}
        ariaLabel={t.medsLabel}
      />

      <div className="sub-content">{content()}</div>
    </div>
  );
}
