import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Meds from './pages/Meds.jsx';
import HrtOverview from './pages/HrtOverview.jsx';
import Surgery from './pages/Surgery.jsx';
import Survey from './pages/Survey.jsx';
import Guide from './pages/Guide.jsx';
import Help from './pages/Help.jsx';
import './style.css';

export default function App() {
  const [currentPath, setCurrentPath] = useState('index');

  const renderPage = () => {
    switch (currentPath) {
      case 'index':
        return <Home setCurrentPath={setCurrentPath} />;
      case 'meds':
        return <Meds setCurrentPath={setCurrentPath} />;
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
      default:
        return <Home setCurrentPath={setCurrentPath} />;
    }
  };

  return (
    <div>
      <Header currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
