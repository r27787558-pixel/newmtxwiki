import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import MobileTopbar from './components/MobileTopbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
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
import NotFound from './pages/NotFound';
import { useLanguage } from './context/LanguageContext';
import { HOME_PATH, isKnownPath, pathFromHash, resolvePageName } from './routes';

function getPathFromHash(): string {
  if (typeof window === 'undefined') return HOME_PATH;
  return pathFromHash(window.location.hash);
}

/** 跳过导航：把焦点直接移到正文，且不改变 hash（否则会被路由器当成页面跳转） */
function focusMainContent() {
  const main = document.getElementById('main');
  if (!main) return;
  main.focus({ preventScroll: true });
  main.scrollIntoView({ block: 'start' });
}

export default function App() {
  const { lang, t } = useLanguage();
  const [currentPath, setCurrentPathState] = useState<string>(getPathFromHash);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // 首屏不播放淡入动画：见 style.css 中 .main-content--animated 的说明
  const [hasNavigated, setHasNavigated] = useState(false);

  const setCurrentPath = useCallback((path: string) => {
    if (getPathFromHash() !== path) {
      window.location.hash = `/${path}`;
    }
    setCurrentPathState(path);
    setHasNavigated(true);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPathState(getPathFromHash());
      setHasNavigated(true);
      setSidebarOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // 移动端抽屉：Esc 关闭
  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sidebarOpen]);

  // 标题与 meta 描述
  useEffect(() => {
    const known = isKnownPath(currentPath);
    const name = known ? resolvePageName(currentPath, lang) : t.notFoundTitle;
    document.title = `${name} · ${t.brand}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', `${name} · ${t.brand} —— ${t.tagline}`);
    }
  }, [currentPath, lang, t.brand, t.tagline, t.notFoundTitle]);

  const renderPage = () => {
    const [section, sub, subSub] = currentPath.split('/');
    switch (section) {
      case 'index':
        return <Home setCurrentPath={setCurrentPath} />;
      case 'meds':
        return (
          <Meds subTab={sub || 'monitoring'} subSubTab={subSub} setCurrentPath={setCurrentPath} />
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
        return <NotFound setCurrentPath={setCurrentPath} />;
    }
  };

  return (
    <div className="site-wrapper">
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          focusMainContent();
        }}
      >
        {t.skipToContent}
      </a>
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
          setSidebarOpen={setSidebarOpen}
        />
        {/* key 触发切换页面时的淡入，并让焦点回到正文起点 */}
        <main
          className={`main-content${hasNavigated ? ' main-content--animated' : ''}`}
          id="main"
          tabIndex={-1}
          key={currentPath}
        >
          {renderPage()}
        </main>
      </div>
      <Footer setCurrentPath={setCurrentPath} />
      <BackToTop />
      <div
        className={`sidebar-backdrop ${sidebarOpen ? 'show' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
    </div>
  );
}
