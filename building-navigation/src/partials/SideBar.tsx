import React from 'react';
import {
  LayoutGrid,
  Repeat,
  Users,
  PieChart,
  Settings,
  Terminal,
  Component,
  LogOut,
} from 'lucide-react';

interface SideBarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  activeTab = 'Overview',
  onTabChange,
}) => {
  const navItems = [
    { name: 'Overview', icon: LayoutGrid },
    { name: 'Components', icon: Component },
    { name: 'Transactions', icon: Repeat },
    { name: 'Customers', icon: Users },
    { name: 'Reports', icon: PieChart },
    { name: 'Settings', icon: Settings },
    { name: 'Developer', icon: Terminal },
  ];

  return (
    <aside className="w-64 bg-primary text-slate-300 flex flex-col justify-between min-h-screen p-6 select-none shrink-0 shadow-xl">
      <div>
        {/* Logo / Brand Header */}
        <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold shadow-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            NexaVerse
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => onTabChange?.(item.name)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-secondary text-white shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-secondary/50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Log out Footer */}
      <div className="pt-6 border-t border-slate-700/40">
        <button
          onClick={() => alert('Logging out...')}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-secondary/50 transition-all duration-200 cursor-pointer"
        >
          <LogOut className="w-5 h-5 text-slate-400" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
