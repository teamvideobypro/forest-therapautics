import { useState, useEffect } from 'react';
import { Wind, Sparkles } from 'lucide-react';

export default function PhilosophySection({ stripInspectorActive }) {
  const [breathPhase, setBreathPhase] = useState('Inhale (4s)');
  const [breathActive, setBreathActive] = useState(false);

  useEffect(() => {
    if (!breathActive) return;
    const interval = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === 'Inhale (4s)') return 'Hold (4s)';
        if (prev === 'Hold (4s)') return 'Exhale (6s)';
        return 'Inhale (4s)';
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [breathActive]);

  return (
    <section 
      id="philosophy"
      className="py-10 sm:py-14"
    >
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 02 • Editorial Statement & The Two Ascensions
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Eyebrow & Pill */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
              <span>How This Space Is Held</span>
            </div>

            <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed">
              An unhurried departure from self-help hustle, modern performance anxiety, and guru devotion.
            </p>

            {/* Interactive Forest Breath Grounding Button */}
            <div className="pt-2">
              <button
                onClick={() => setBreathActive(!breathActive)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#F2EFE8] border border-[#E8E5DD] text-xs text-[#131914] font-medium transition-all shadow-xs"
              >
                <Wind className="w-3.5 h-3.5 text-[#131914]" />
                <span>{breathActive ? `Forest Breath: ${breathPhase}` : 'Breathe with the Forest'}</span>
              </button>
              {breathActive && (
                <span className="block mt-2 text-xs text-[#656C64] italic animate-pulse">
                  Drop your shoulders. Feel the ground beneath you.
                </span>
              )}
            </div>
          </div>

          {/* Right Main Statement & Two Ascensions Card */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#131914] leading-[1.2]">
              You are not here to be fixed. You are here to be witnessed, supported, and reminded of <span className="font-accent">your own coherence.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#656C64] leading-relaxed font-normal">
              Most modern systems approach the seeker as fractured, traumatized, or unfinished—demanding endless fixing protocols. <strong className="text-[#131914] font-medium">Eco-Christed Living</strong> offers a gentle, radical remembering: You are a living organ of the Earth, temporarily quieted by the velocity of modern living.
            </p>

            {/* The Two Ascensions Card (Clean White Rounded Box from Reference) */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8E5DD] shadow-xs space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#131914]" />
                <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#131914] tracking-tight">
                  The Cosmology of <span className="font-accent">The Two Ascensions</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#131914]">
                    <span className="w-2 h-2 rounded-full bg-[#131914]" />
                    <span>The First Ascension</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed">
                    Reaching upward into transcendent spiritual clarity, unfallen heart coherence, luminous wisdom, and divine communion.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#D6E3CE]/40 border border-[#C6D6BD] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#131914]">
                    <span className="w-2 h-2 rounded-full bg-[#131914]" />
                    <span>The Second Ascension</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed">
                    Rooting downward into soil intelligence, nervous system calm, ancient trees, and the living embodiment of sacred presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
