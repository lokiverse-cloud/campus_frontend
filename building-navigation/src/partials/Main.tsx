import React from 'react';
import { Button } from '../components/buttons';
import { Plus, ArrowRight, Trash2, CheckCircle2, Download } from 'lucide-react';

interface MainProps {
  children?: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="p-8 bg-slate-100/70 min-h-[calc(100vh-73px)] space-y-8">
      {children || (
        <>
          {/* Button Component Variants Showcase */}
          <section className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Button Component Variants & Sizes
            </h2>

            {/* Variants */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Variants</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
                  Primary Button
                </Button>
                <Button variant="secondary" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
                  Secondary Button
                </Button>
                <Button variant="tertiary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Tertiary Button
                </Button>
                <Button variant="base">Base Button</Button>
                <Button variant="alt">Alternative Button</Button>
                <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
                  Outline Button
                </Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="danger" leftIcon={<Trash2 className="w-4 h-4" />}>
                  Danger Button
                </Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm" variant="primary">Small (sm)</Button>
                <Button size="md" variant="primary">Medium (md)</Button>
                <Button size="lg" variant="primary">Large (lg)</Button>
                <Button size="xl" variant="primary">Extra Large (xl)</Button>
                <Button size="icon" variant="primary" aria-label="Add icon">
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* States */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">States</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button isLoading variant="primary">Loading State</Button>
                <Button disabled variant="primary">Disabled State</Button>
                <Button fullWidth variant="primary" className="max-w-xs">Full Width Button</Button>
              </div>
            </div>
          </section>

          {/* Section 1: Stat Cards Grid Structure */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary text-white p-6 rounded-2xl shadow-sm min-h-32 flex flex-col justify-between">
              <span className="text-sm font-medium text-slate-300">Stat Card 1</span>
              <div className="mt-2">
                <Button size="sm" variant="alt">Action</Button>
              </div>
            </div>
            <div className="bg-secondary text-white p-6 rounded-2xl shadow-sm min-h-32 flex flex-col justify-between">
              <span className="text-sm font-medium text-slate-300">Stat Card 2</span>
              <div className="mt-2">
                <Button size="sm" variant="tertiary">Action</Button>
              </div>
            </div>
            <div className="bg-tertiary text-white p-6 rounded-2xl shadow-sm min-h-32 flex flex-col justify-between">
              <span className="text-sm font-medium text-slate-200">Stat Card 3</span>
              <div className="mt-2">
                <Button size="sm" variant="base">Action</Button>
              </div>
            </div>
            <div className="bg-alt text-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 min-h-32 flex flex-col justify-between">
              <span className="text-sm font-medium text-slate-600">Stat Card 4</span>
              <div className="mt-2">
                <Button size="sm" variant="outline">Action</Button>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Main;
