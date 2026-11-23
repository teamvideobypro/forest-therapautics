import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function HeroSection({
  onExploreSchools,
  onBookGuidance,
  stripInspectorActive
}) {
  const tickerItems = [
    "Founding Year Opening Oct 31, 2026",
    "Global Online & By-Mail Seminary",
    "Roku & Fire TV Channel 436",
    "Eco-Christed Living Sanctuary",
    "Sovereign Spirit & Living Earth",
    "Unhurried Presence"
  ];

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#131914] text-white"
    >
      {/* Background Photography with Warm Atmospheric Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=85"
          alt="Sunlight filtering through forest clearing"
          className="w-full h-full object-cover object-center opacity-45 scale-102 transition-transform duration-1000"
        />
        {/* Directional & Radial Gradients for Pristine Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131914] via-[#131914]/50 to-[#131914]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(19,25,20,0.55)_100%)]" />
      </div>

      {/* Top Spacer / Inspector Tag / Founder Badge */}
      <div className="relative z-10 pt-24 sm:pt-28 px-4 sm:px-8 max-w-7xl mx-auto w-full flex items-center justify-between">
        {stripInspectorActive ? (
          <span className="wix-strip-badge">
            Wix Strip 01 • Full-Viewport Hero & Benefit Ribbon
          </span>
        ) : (
          <div />
        )}

        {/* Floating Top Right Badge */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-white/90 hero-fade-sub">
          <span className="w-2 h-2 rounded-full bg-[#D6E3CE] animate-pulse" />
          <span className="font-mono text-[11px] font-medium tracking-wide">
            Founding Year: Oct 31, 2026
          </span>
        </div>
      </div>

      {/* Main Hero Editorial Content (Centered/Balanced in Viewport) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto py-8 sm:py-12">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {/* Pill Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-xs hero-fade-badge">
            <Sparkles className="w-3.5 h-3.5 text-[#D6E3CE]" />
            <span className="tracking-wide text-[11px] font-medium">
              Eco-Christed Living • Spiritual Seminary & University
            </span>
          </div>

          {/* Headline - strictly preserving clean sans-serif style from reference */}
          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.08] hero-fade-title">
            The Earth has never stopped calling you back to yourself.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 font-normal leading-relaxed max-w-2xl hero-fade-desc">
            Where nature, presence, and the awakened heart restore what modern living has quieted. You are not broken. You are remembering—and this is where that remembering has a home.
          </p>

          {/* Pill Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 hero-fade-cta">
            <button
              onClick={onExploreSchools}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-white/90 text-[#131914] font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm hover-lift flex items-center gap-2"
            >
              <span>Explore the Schools</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBookGuidance}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white backdrop-blur-xs font-medium text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#D6E3CE]" />
              <span>Book Guidance</span>
            </button>
          </div>
        </div>
      </div>

      {/* CONTINUOUS SMOOTH TICKER RIBBON (Full-Width Sage Green Bar Pinned at Bottom) */}
      <div className="relative z-10 w-full bg-[#D6E3CE] py-3.5 sm:py-4 overflow-hidden border-t border-[#C6D6BD] text-[#131914] flex items-center">
        <div className="animate-ticker text-xs sm:text-sm font-medium tracking-wide flex items-center gap-8 whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#131914]/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
