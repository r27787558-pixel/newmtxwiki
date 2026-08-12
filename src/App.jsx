import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import Home from './pages/Home.jsx';
import Meds from './pages/Meds.jsx';
import HrtOverview from './pages/HrtOverview.jsx';
import Surgery from './pages/Surgery.jsx';
import Survey from './pages/Survey.jsx';
import Guide from './pages/Guide.jsx';
import Help from './pages/Help.jsx';
import './style.css';

const TITLES = {
  index: '首页 · MtX.wiki',
  meds: '药物 · MtX.wiki',
  'hrt-overview': 'HRT 指南（综述） · MtX.wiki',
  surgery: '手术 · MtX.wiki',
  survey: '调查问卷 · MtX.wiki',
  guide: '生活指南 · MtX.wiki',
  help: '救助资源 · MtX.wiki',
  disclaimer: '医学免责声明 · MtX.wiki',
};

function getPathFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return hash || 'index';
}

export default function App() {
  const [currentPath, setCurrentPathState] = useState(getPathFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPathState(getPathFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setCurrentPath = (path) => {
    if (getPathFromHash() !== path) {
      window.location.hash = `/${path}`;
    }
    setCurrentPathState(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.title = TITLES[currentPath] || TITLES.index;
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case 'index':
        return <Home setCurrentPath={setCurrentPath} />;
      case 'meds':
        return <Meds />;
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
      default:
        return <Home setCurrentPath={setCurrentPath} />;
    }
  };

  return (
    <div className="site-wrapper">
      <Header currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <div className="wiki-layout">
        <Sidebar currentPath={currentPath} setCurrentPath={setCurrentPath} />
        <main className="main-content">{renderPage()}</main>
      </div>
      <Footer setCurrentPath={setCurrentPath} />
    </div>
  );
}
