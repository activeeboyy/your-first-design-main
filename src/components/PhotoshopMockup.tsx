import { useState } from 'react';
import {
  MousePointer,
  Square,
  Lasso,
  Crop,
  Pipette,
  Paintbrush,
  Eraser,
  PenTool,
  Type,
  Eye,
  EyeOff,
  Layers,
  Palette,
  Maximize2,
  Sparkles,
} from 'lucide-react';

export default function PhotoshopMockup() {
  const [activeTool, setActiveTool] = useState<'move' | 'type' | 'brush' | 'shape'>('type');
  const [showAura, setShowAura] = useState(true);
  const [showTypography, setShowTypography] = useState(true);
  const [showGuides, setShowGuides] = useState(true);
  const [paletteIndex, setPaletteIndex] = useState(0);

  const palettes = [
    { name: 'Electric Orange & Obsidian', bgAura: 'from-[#FF6B00]/40 via-[#F59E0B]/25 to-transparent', accent: '#FF6B00' },
    { name: 'Sunset Amber & Tangerine', bgAura: 'from-[#F59E0B]/40 via-[#FF4500]/30 to-transparent', accent: '#F59E0B' },
    { name: 'Neon Cyan & Tangerine', bgAura: 'from-[#00E5FF]/40 via-[#FF6B00]/30 to-transparent', accent: '#00E5FF' },
  ];

  const currentPalette = palettes[paletteIndex];

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-neutral-800 bg-[#14151B] shadow-2xl shadow-cyan-950/30 overflow-hidden text-neutral-300 select-none">
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#0E0F14] border-b border-neutral-800 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#001E36] border border-[#00A8FF]/40 flex items-center justify-center font-bold text-[#00A8FF] text-[11px] tracking-tight">
            Ps
          </div>
          <span className="font-medium text-neutral-200 truncate">
            YOUR_FIRST_DESIGN_OCT18.psd <span className="text-neutral-500">@ 100% (RGB/8#)</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-neutral-400 text-[11px]">
          <span className="text-neutral-300 font-medium">Interactive Preview</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Zero Images • 100% CSS Vector
          </span>
        </div>
      </div>

      {/* Control Strip / Secondary Options */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#171821] border-b border-neutral-800/80 text-[11px] text-neutral-400 overflow-x-auto">
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-neutral-300 font-semibold">Tool: {activeTool.toUpperCase()}</span>
          <span className="hidden md:inline text-neutral-500">|</span>
          <button
            onClick={() => setShowGuides(!showGuides)}
            className={`px-2 py-0.5 rounded transition-colors text-[11px] ${
              showGuides ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/50' : 'hover:bg-neutral-800'
            }`}
          >
            {showGuides ? 'Guides: ON' : 'Guides: OFF'}
          </button>
          <button
            onClick={() => setPaletteIndex((prev) => (prev + 1) % palettes.length)}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Switch Palette
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-neutral-500 shrink-0">
          <span>Artboard 1080 × 1350</span>
          <span>•</span>
          <span>RGB / 8-Bit</span>
        </div>
      </div>

      {/* Main Workspace Grid: Toolbar + Canvas + Panels */}
      <div className="grid grid-cols-[40px_minmax(0,1fr)] md:grid-cols-[48px_minmax(0,1fr)_200px] bg-[#121319] min-h-[420px] w-full max-w-full overflow-hidden">
        {/* Left Toolbar */}
        <div className="flex flex-col items-center py-3 gap-1 bg-[#161720] border-r border-neutral-800/80 text-neutral-400">
          <button
            onClick={() => setActiveTool('move')}
            title="Move Tool (V)"
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              activeTool === 'move' ? 'bg-[#005299] text-white shadow' : 'hover:bg-neutral-800 hover:text-neutral-200'
            }`}
          >
            <MousePointer className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTool('shape')}
            title="Rectangular Marquee / Shape (M)"
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              activeTool === 'shape' ? 'bg-[#005299] text-white shadow' : 'hover:bg-neutral-800 hover:text-neutral-200'
            }`}
          >
            <Square className="w-4 h-4" />
          </button>
          <button
            title="Lasso Tool (L)"
            className="w-8 h-8 rounded flex items-center justify-center hover:bg-neutral-800 hover:text-neutral-200 transition-colors"
          >
            <Lasso className="w-4 h-4" />
          </button>
          <button
            title="Crop Tool (C)"
            className="w-8 h-8 rounded flex items-center justify-center hover:bg-neutral-800 hover:text-neutral-200 transition-colors"
          >
            <Crop className="w-4 h-4" />
          </button>
          <button
            title="Eyedropper Tool (I)"
            className="w-8 h-8 rounded flex items-center justify-center hover:bg-neutral-800 hover:text-neutral-200 transition-colors"
          >
            <Pipette className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTool('brush')}
            title="Brush Tool (B)"
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              activeTool === 'brush' ? 'bg-[#005299] text-white shadow' : 'hover:bg-neutral-800 hover:text-neutral-200'
            }`}
          >
            <Paintbrush className="w-4 h-4" />
          </button>
          <button
            title="Eraser Tool (E)"
            className="w-8 h-8 rounded flex items-center justify-center hover:bg-neutral-800 hover:text-neutral-200 transition-colors"
          >
            <Eraser className="w-4 h-4" />
          </button>
          <button
            title="Pen Tool (P)"
            className="w-8 h-8 rounded flex items-center justify-center hover:bg-neutral-800 hover:text-neutral-200 transition-colors"
          >
            <PenTool className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTool('type')}
            title="Type Tool (T)"
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              activeTool === 'type' ? 'bg-[#005299] text-white shadow' : 'hover:bg-neutral-800 hover:text-neutral-200'
            }`}
          >
            <Type className="w-4 h-4" />
          </button>

          {/* Color Foreground / Background swatches */}
          <div className="mt-auto relative w-7 h-7 mb-2">
            <div
              className="w-4 h-4 rounded-xs border border-white absolute top-0 left-0 shadow-sm"
              style={{ backgroundColor: currentPalette.accent }}
            ></div>
            <div className="w-4 h-4 rounded-xs border border-neutral-700 bg-neutral-900 absolute bottom-0 right-0"></div>
          </div>
        </div>

        {/* Center Artboard Canvas */}
        <div className="relative flex items-center justify-center p-2 sm:p-8 bg-[#1B1C26] overflow-hidden min-w-0 w-full">
          {/* Subtle Canvas Rulers & Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

          {/* Guides if enabled */}
          {showGuides && (
            <>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-400/40 pointer-events-none"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-400/40 pointer-events-none"></div>
            </>
          )}

          {/* Photoshop Poster Artboard (100% CSS Shapes & Typography) */}
          <div className="relative w-full max-w-[320px] aspect-[4/5] bg-[#0A0B10] rounded-lg shadow-2xl border border-neutral-700/60 overflow-hidden flex flex-col justify-between p-4 sm:p-6 mx-auto">
            {/* Background Aura Layer */}
            {showAura && (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentPalette.bgAura} blur-2xl opacity-80 pointer-events-none`}
              ></div>
            )}

            {/* Geometric CSS Shapes inside poster */}
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-neutral-700/50 flex items-center justify-center pointer-events-none">
              <div
                className="w-12 h-12 rounded-full border border-dashed transition-colors"
                style={{ borderColor: currentPalette.accent }}
              ></div>
            </div>

            {/* Selection Transform Box Box around the artwork */}
            <div className="absolute inset-3 rounded border border-cyan-400/50 pointer-events-none">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-cyan-500"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-cyan-500"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-cyan-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-cyan-500"></div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-cyan-500"></div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-cyan-500"></div>
            </div>

            {/* Poster Header */}
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-[0.25em] font-mono-num uppercase text-cyan-400 font-semibold block">
                  LIVE WORKSHOP
                </span>
                <span className="text-xs text-neutral-400 font-medium">OCTOBER 18 · 8:00 PM</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono-num text-neutral-500">100% FREE</span>
              </div>
            </div>

            {/* Poster Main Headline in Pure CSS Typography */}
            {showTypography && (
              <div className="relative z-10 my-auto text-left py-2">
                <div className="text-[11px] font-mono text-neutral-400 tracking-wider mb-1">
                  PROJECT 01:
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white">
                  YOUR
                  <span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-cyan-300"
                  >
                    FIRST
                  </span>
                  <span
                    className="block transition-colors"
                    style={{ color: currentPalette.accent }}
                  >
                    DESIGN
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-2 font-medium">
                  Zero Experience Required · Practical Class
                </p>
              </div>
            )}

            {/* Poster Footer details */}
            <div className="relative z-10 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] text-neutral-400 font-mono-num">
              <span>HOST: FRANKLIN</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                WHATSAPP LIVE
              </span>
            </div>
          </div>
        </div>

        {/* Right Dock: Layers & Properties Panel */}
        <div className="hidden md:flex flex-col bg-[#161720] border-l border-neutral-800/80 text-xs">
          {/* Panel Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#1A1B24] border-b border-neutral-800 font-semibold text-neutral-300">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Layers
            </span>
            <span className="text-[10px] text-neutral-500 font-normal">Normal 100%</span>
          </div>

          {/* Layer List with interactive Eye Toggles */}
          <div className="p-2 space-y-1 flex-1 overflow-y-auto">
            {/* Layer 3: Typography */}
            <div
              onClick={() => setShowTypography(!showTypography)}
              className={`flex items-center gap-2 p-1.5 rounded cursor-pointer transition-colors ${
                showTypography ? 'bg-[#1E2230] text-neutral-200' : 'bg-transparent text-neutral-500 opacity-60'
              }`}
            >
              <button
                type="button"
                className="text-neutral-400 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTypography(!showTypography);
                }}
              >
                {showTypography ? <Eye className="w-3.5 h-3.5 text-cyan-400" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>
              <div className="w-4 h-4 rounded bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center font-bold text-[9px] text-cyan-300">
                T
              </div>
              <span className="truncate text-[11px] font-medium">Main Headline</span>
            </div>

            {/* Layer 2: Aura Gradient */}
            <div
              onClick={() => setShowAura(!showAura)}
              className={`flex items-center gap-2 p-1.5 rounded cursor-pointer transition-colors ${
                showAura ? 'bg-[#1E2230] text-neutral-200' : 'bg-transparent text-neutral-500 opacity-60'
              }`}
            >
              <button
                type="button"
                className="text-neutral-400 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAura(!showAura);
                }}
              >
                {showAura ? <Eye className="w-3.5 h-3.5 text-cyan-400" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>
              <div
                className="w-4 h-4 rounded border border-neutral-700"
                style={{ backgroundColor: currentPalette.accent }}
              ></div>
              <span className="truncate text-[11px] font-medium">Aura Gradient</span>
            </div>

            {/* Layer 1: Vector Grid */}
            <div className="flex items-center gap-2 p-1.5 rounded bg-[#1E2230] text-neutral-200">
              <Eye className="w-3.5 h-3.5 text-neutral-500" />
              <div className="w-4 h-4 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[9px] text-neutral-400">
                #
              </div>
              <span className="truncate text-[11px] font-medium">Layout Grid</span>
            </div>

            {/* Layer 0: Background */}
            <div className="flex items-center gap-2 p-1.5 rounded bg-neutral-900/60 text-neutral-400">
              <Eye className="w-3.5 h-3.5 text-neutral-600" />
              <div className="w-4 h-4 rounded bg-black border border-neutral-800"></div>
              <span className="truncate text-[11px]">Dark Canvas</span>
            </div>
          </div>

          {/* Color Palettes Swatches Panel */}
          <div className="p-3 border-t border-neutral-800 bg-[#14151E]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 flex items-center gap-1">
                <Palette className="w-3 h-3 text-cyan-400" />
                Theme
              </span>
              <span className="text-[10px] text-neutral-500">{currentPalette.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {palettes.map((p, idx) => (
                <button
                  key={p.name}
                  onClick={() => setPaletteIndex(idx)}
                  className={`w-6 h-6 rounded-full border-2 transition-transform ${
                    paletteIndex === idx ? 'scale-110 border-white' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: p.accent }}
                  title={p.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="px-3 py-1.5 bg-[#0F1015] border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 font-mono-num">
        <div>Doc: 1.25M / 2.45M · 100% Zoom</div>
        <div className="text-cyan-400/80">Interactive CSS Preview — You will learn this step by step!</div>
      </div>
    </div>
  );
}
