import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MobileTopbar from './components/MobileTopbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Disclaimer from './pages/Disclaimer';
import Home from './pages/Home';
import Meds from './pages/Meds';
import HrtOverview from './pages/HrtOverview';
import Surgery from './pages/Surgery';
import Survey from './pages/Survey';
import Guide from './pages/Guide';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Contributors from './pages/Contributors';
import { useLanguage } from './context/LanguageContext';
import type { Language } from './i18n';
import './style.css';

const TITLES: Record<Language, Record<string, string>> = {
  zh: {
    index: '首页 · MtX.wiki',
    meds: '药物 · MtX.wiki',
    'hrt-overview': 'HRT 指南（综述） · MtX.wiki',
    surgery: '手术 · MtX.wiki',
    survey: '调查问卷 · MtX.wiki',
    guide: '生活指南 · MtX.wiki',
    help: '救助资源 · MtX.wiki',
    disclaimer: '医学免责声明 · MtX.wiki',
    contact: '联系 · MtX.wiki',
    contributors: '贡献者名单 · MtX.wiki',
    'meds/monitoring': '用药期间的监测 · MtX.wiki',
    'meds/risks': '用药风险 · MtX.wiki',
    'meds/estrogens': '雌激素类药物 · MtX.wiki',
    'meds/anti-androgens': '抗雄激素类药物 · MtX.wiki',
    'meds/serms': '选择性雌激素受体调节剂 · MtX.wiki',
    'meds/others': '其它药物 · MtX.wiki',
  },
  en: {
    index: 'Home · MtX.wiki',
    meds: 'Medications · MtX.wiki',
    'hrt-overview': 'HRT Guide (Overview) · MtX.wiki',
    surgery: 'Surgery · MtX.wiki',
    survey: 'Survey · MtX.wiki',
    guide: 'Life Guide · MtX.wiki',
    help: 'Help Resources · MtX.wiki',
    disclaimer: 'Medical Disclaimer · MtX.wiki',
    contact: 'Contact · MtX.wiki',
    contributors: 'Contributors · MtX.wiki',
    'meds/monitoring': 'Monitoring · MtX.wiki',
    'meds/risks': 'Risks · MtX.wiki',
    'meds/estrogens': 'Estrogens · MtX.wiki',
    'meds/anti-androgens': 'Anti-androgens · MtX.wiki',
    'meds/serms': 'SERMs · MtX.wiki',
    'meds/others': 'Other Medications · MtX.wiki',
  },
};

function getPathFromHash(): string {
  if (typeof window === 'undefined') return 'index';
  const hash = window.location.hash.replace(/^#\/?/, '');
  return hash || 'index';
}

function resolveTitle(titles: Record<string, string>, path: string, fallback: string): string {
  const segs = path.split('/');
  while (segs.length > 0) {
    const key = segs.join('/');
    if (titles[key]) return titles[key];
    segs.pop();
  }
  return fallback;
}

export default function App() {
  const { lang } = useLanguage();
  const [currentPath, setCurrentPathState] = useState<string>(getPathFromHash);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPathState(getPathFromHash());
      setSidebarOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setCurrentPath = (path: string) => {
    if (getPathFromHash() !== path) {
      window.location.hash = `/${path}`;
    }
    setCurrentPathState(path);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const titles = TITLES[lang] || TITLES.zh;
    document.title = resolveTitle(titles, currentPath, titles.index);
  }, [currentPath, lang]);

  const renderPage = () => {
    const [section, sub, subSub] = currentPath.split('/');
    switch (section) {
      case 'index':
        return <Home setCurrentPath={setCurrentPath} />;
      case 'meds':
        return (
          <Meds
            subTab={sub || 'monitoring'}
            subSubTab={subSub}
            setCurrentPath={setCurrentPath}
          />
        );
      case 'hrt-overview':
        return <HrtOverview />;
      case 'surgery':
        return <Surgery />;
      case 'survey':
        return <Survey />;
      case 'guide':
        return <Guide />;
      case 'help':
        return <Help />;
      case 'disclaimer':
        return <Disclaimer />;
      case 'contact':
        return <Contact />;
      case 'contributors':
        return <Contributors />;
      default:
        return <Home setCurrentPath={setCurrentPath} />;
    }
  };

  return (
    <div className="site-wrapper">
      <MobileTopbar
        setCurrentPath={setCurrentPath}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <Header currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <div className="wiki-layout">
        <Sidebar
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
          sidebarOpen={sidebarOpen}
        />
        <main className="main-content">{renderPage()}</main>
      </div>
      <Footer setCurrentPath={setCurrentPath} />
      <div
        className={`sidebar-backdrop ${sidebarOpen ? 'show' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
    </div>
  );
}
