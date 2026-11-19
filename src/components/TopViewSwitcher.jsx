import { Eye, Layers, Compass, Sparkles } from 'lucide-react';
import AmbientAudioPlayer from './AmbientAudioPlayer';

export default function TopViewSwitcher({
  currentView,
  setCurrentView,
  stripInspectorActive,
  setStripInspectorActive
}) {
  return (
    <aside aria-label="Preview navigation" className="sticky top-0 z-50 w-full bg-[#131914] text-white border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Project Context & Founder Notice */}
        <div className="flex items-center gap-2.5 text-xs">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#D6E3CE] font-semibold tracking-wider uppercase text-[10px]">
            <Sparkles className="w-3 h-3 text-[#D6E3CE]" />
            Wix Rebuild Showcase
          </span>
          <span className="hidden sm:inline-block text-white/70">
            For <strong className="text-white">Telu'an Veyar</strong> • ForestTherapeutics.us
          </span>
        </div>

        {/* Center: Main View Switcher (Pill styling) */}
        <div className="flex items-center rounded-full bg-black/40 p-1 border border-white/10">
          <button
            onClick={() => setCurrentView('homepage')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              currentView === 'homepage'
                ? 'bg-white text-[#131914] shadow-xs font-semibold'
                : 'text-white/80 hover:text-white hover:bg-white/5'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Native Wix Homepage</span>
          </button>

          <button
            onClick={() => setCurrentView('blueprint')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              currentView === 'blueprint'
                ? 'bg-white text-[#131914] shadow-xs font-semibold'
                : 'text-white/80 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Site Architecture Blueprint</span>
          </button>
        </div>

        {/* Right: Controls & Strip Inspector Toggle */}
        <div className="flex items-center gap-3">
          {currentView === 'homepage' && (
            <button
              onClick={() => setStripInspectorActive(!stripInspectorActive)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors border ${
                stripInspectorActive
                  ? 'bg-[#D6E3CE] border-[#D6E3CE] text-[#131914] font-semibold'
                  : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
              }`}
              title="Toggle Wix Strip-by-Strip Inspector labels to show 1:1 mapping to Native Wix Editor strips"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Wix Strips:</span>
              <span className="font-mono text-[11px]">{stripInspectorActive ? 'ON' : 'OFF'}</span>
            </button>
          )}

          <AmbientAudioPlayer />
        </div>
      </div>
    </aside>
  );
}
