import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Meds from './pages/Meds';
import HrtOverview from './pages/HrtOverview';
import Surgery from './pages/Surgery';
import Survey from './pages/Survey';
import Guide from './pages/Guide';
import Help from './pages/Help';
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
    <div className="app-container">
      <Header currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <main>{renderPage()}</main>
    </div>
  );
}

