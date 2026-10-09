import React from 'react';
import { Search, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = 'Dashboard' }) => {
  return (
    <header className="bg-white border-b border-slate-200/80 px-8 py-4 flex items-center justify-between shadow-xs sticky top-0 z-10">
      {/* Header Title */}
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
        {title}
      </h1>

      {/* Header Controls: Search & User Profile */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search transactions, customers, subscriptions"
            className="w-full bg-slate-900 text-white text-xs pl-10 pr-4 py-2.5 rounded-full placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-tertiary transition-all"
          />
        </div>

        {/* Profile Avatar & Dropdown */}
        <div className="flex items-center gap-2 cursor-pointer p-1.5 rounded-full hover:bg-slate-100 transition-colors">
          <div className="w-9 h-9 rounded-full bg-slate-700 text-white flex items-center justify-center font-medium shadow-xs">
            <User className="w-5 h-5" />
          </div>
          <ChevronDown className="w-4 h-4 text-slate-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
