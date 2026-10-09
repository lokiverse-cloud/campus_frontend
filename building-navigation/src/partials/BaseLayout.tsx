import React, { useState } from 'react';
import SideBar from './SideBar';
import Header from './Header';
import Main from './Main';
import ComponentsView from '../views/components/Components';

export const BaseLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const isComponentsTab = activeTab === 'Components' || activeTab === 'Developer';

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      {/* Sidebar with Primary color background */}
      <SideBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Layout with White Header */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={isComponentsTab ? 'Component Library' : activeTab} />
        {isComponentsTab ? <ComponentsView /> : <Main />}
      </div>
    </div>
  );
};

export default BaseLayout;
