import React, { useState } from 'react';
import { Button } from '../../components/buttons';
import { Input } from '../../components/inputs';
import { SideBar } from '../../partials/SideBar';
import { Header } from '../../partials/Header';
import {
  Plus,
  ArrowRight,
  Trash2,
  CheckCircle2,
  Download,
  Settings,
  User,
  Search,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  LayoutGrid,
  Palette,
  Type,
  Layers,
  Sparkles,
  TextCursorInput,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const ComponentsView: React.FC = () => {
  const [interactiveCount, setInteractiveCount] = useState(0);
  const [activeTab, setActiveTab] = useState('Inputs');
  const [showPassword, setShowPassword] = useState(false);
  const [demoValue, setDemoValue] = useState('');

  const colorPalette = [
    { name: 'Primary', hex: '#0D1B2A', bgClass: 'bg-primary', textClass: 'text-white' },
    { name: 'Secondary', hex: '#1B263B', bgClass: 'bg-secondary', textClass: 'text-white' },
    { name: 'Tertiary', hex: '#415A77', bgClass: 'bg-tertiary', textClass: 'text-white' },
    { name: 'Base', hex: '#778DA9', bgClass: 'bg-base', textClass: 'text-slate-900' },
    { name: 'Alternative', hex: '#E0E1DD', bgClass: 'bg-alt', textClass: 'text-slate-900' },
  ];

  return (
    <div className="p-8 space-y-12 max-w-7xl mx-auto font-sans">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-tertiary tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" /> Design System & Component Library
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Component Showcase
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Section-by-section visualization of UI components, inputs, buttons, and tokens.
          </p>
        </div>

        {/* Quick Jump Tabs */}
        <div className="flex items-center gap-2 bg-slate-200/60 p-1.5 rounded-xl text-xs font-semibold">
          {['Inputs', 'Buttons', 'Colors', 'Layouts', 'Typography'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION: INPUT FIELDS (SECTION WISE DISPLAY) */}
      {(activeTab === 'Inputs' || activeTab === 'All') && (
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <TextCursorInput className="w-6 h-6 text-tertiary" />
              <h2>Input Field Components Showcase</h2>
            </div>
            <span className="text-xs bg-tertiary/10 text-tertiary px-3 py-1 rounded-full font-bold">
              4 Sub-Sections
            </span>
          </div>

          {/* SUB-SECTION 1: VARIANTS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">1. Input Style Variants</h3>
                <p className="text-xs text-slate-500">
                  Different visual background and border treatments (<code className="text-tertiary">outline</code>, <code className="text-tertiary">filled</code>, <code className="text-tertiary">unstyled</code>).
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">variant=""</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Outline (Default)</span>
                <Input
                  label="Outline Variant"
                  variant="outline"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filled</span>
                <Input
                  label="Filled Variant"
                  variant="filled"
                  placeholder="e.g. Search dashboard..."
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unstyled</span>
                <div className="border-b border-slate-300 pb-1">
                  <Input
                    label="Unstyled Variant"
                    variant="unstyled"
                    placeholder="Minimal borderless input..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SUB-SECTION 2: ICONS INTEGRATION */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">2. Inputs with Icons</h3>
                <p className="text-xs text-slate-500">
                  Embed leading (<code className="text-tertiary">leftIcon</code>) and trailing (<code className="text-tertiary">rightIcon</code>) elements or interactive toggles.
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">leftIcon / rightIcon</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Search (Left Icon)</span>
                <Input
                  label="Global Search"
                  placeholder="Search orders, clients..."
                  leftIcon={<Search className="w-4 h-4 text-slate-400" />}
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Password (Interactive Right Icon)</span>
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter secret password"
                  leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
                      title={showPassword ? 'Hide Password' : 'Show Password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  }
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Field (Both Icons)</span>
                <Input
                  label="Verified Username"
                  defaultValue="alex_developer"
                  leftIcon={<User className="w-4 h-4 text-slate-400" />}
                  rightIcon={<Check className="w-4 h-4 text-emerald-600 font-bold" />}
                  helperText="Username is available!"
                />
              </div>
            </div>
          </div>

          {/* SUB-SECTION 3: SIZES */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">3. Size Variations</h3>
                <p className="text-xs text-slate-500">
                  Scale inputs across three predefined size tokens (<code className="text-tertiary">sm</code>, <code className="text-tertiary">md</code>, <code className="text-tertiary">lg</code>).
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">sizeVariant=""</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 items-end">
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Small (sm)</span>
                <Input
                  sizeVariant="sm"
                  label="Filter Query"
                  placeholder="Small compact input..."
                  leftIcon={<Search className="w-3.5 h-3.5" />}
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Medium (md - Default)</span>
                <Input
                  sizeVariant="md"
                  label="Standard Field"
                  placeholder="Medium default input..."
                  leftIcon={<Mail className="w-4 h-4" />}
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Large (lg)</span>
                <Input
                  sizeVariant="lg"
                  label="Prominent Field"
                  placeholder="Large spacious input..."
                  leftIcon={<Mail className="w-5 h-5" />}
                />
              </div>
            </div>
          </div>

          {/* SUB-SECTION 4: STATES & VALIDATION */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">4. Form States & Validation Messages</h3>
                <p className="text-xs text-slate-500">
                  Required fields, helper text, error messages, and disabled states.
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">error / helperText / disabled</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Required Label</span>
                <Input
                  label="Full Name"
                  required
                  placeholder="Johnathan Smith"
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">With Helper Text</span>
                <Input
                  label="Workspace Name"
                  placeholder="my-team"
                  helperText="Must be unique & lowercase."
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Error Validation</span>
                <Input
                  label="Billing Email"
                  defaultValue="invalid-email@"
                  error="Please enter a valid email address."
                />
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Disabled State</span>
                <Input
                  label="Account Role"
                  disabled
                  defaultValue="Administrator (Read Only)"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION: BUTTONS */}
      {(activeTab === 'Buttons' || activeTab === 'All') && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Layers className="w-6 h-6 text-tertiary" />
            <h2>Button Component Gallery</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-8">
            {/* Color Variants */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Color Variants
                </h3>
                <span className="text-xs text-slate-400">8 unique styles</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
                  Primary
                </Button>
                <Button variant="secondary" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
                  Secondary
                </Button>
                <Button variant="tertiary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Tertiary
                </Button>
                <Button variant="base">Base</Button>
                <Button variant="alt">Alternative</Button>
                <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
                  Outline
                </Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger" leftIcon={<Trash2 className="w-4 h-4" />}>
                  Danger
                </Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Size Scale
                </h3>
                <span className="text-xs text-slate-400">sm | md | lg | xl | icon</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button size="sm" variant="primary">
                  Small (sm)
                </Button>
                <Button size="md" variant="primary">
                  Medium (md)
                </Button>
                <Button size="lg" variant="primary">
                  Large (lg)
                </Button>
                <Button size="xl" variant="primary">
                  Extra Large (xl)
                </Button>
                <Button size="icon" variant="primary" aria-label="Icon size">
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION: COLOR PALETTE */}
      {(activeTab === 'Colors' || activeTab === 'All') && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Palette className="w-6 h-6 text-tertiary" />
            <h2>Color System Palette</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {colorPalette.map((color) => (
              <div
                key={color.name}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div
                  className={`h-28 ${color.bgClass} flex items-end p-4 transition-transform hover:scale-[1.02]`}
                >
                  <span className={`font-mono text-sm font-bold ${color.textClass}`}>
                    {color.hex}
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-slate-900 text-sm">{color.name}</h3>
                  <code className="text-xs text-slate-500 font-mono">
                    bg-{color.name.toLowerCase()}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION: TYPOGRAPHY SHOWCASE */}
      {(activeTab === 'Typography' || activeTab === 'All') && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Type className="w-6 h-6 text-tertiary" />
            <h2>Typography (Raleway Font)</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Heading 1</span>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Raleway Display Heading 1
              </h1>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Heading 2</span>
              <h2 className="text-2xl font-bold text-slate-800">
                Raleway Section Subtitle Heading 2
              </h2>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase">Body Text</span>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                The Raleway font family brings clean, modern elegance to all dashboard components.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION: LAYOUTS PREVIEW */}
      {(activeTab === 'Layouts' || activeTab === 'All') && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <LayoutGrid className="w-6 h-6 text-tertiary" />
            <h2>Layout Partials (Header & SideBar)</h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-slate-100 p-3 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
              Header Component Live Preview
            </div>
            <Header title="Component Explorer" />
          </div>
        </section>
      )}
    </div>
  );
};

export default ComponentsView;
