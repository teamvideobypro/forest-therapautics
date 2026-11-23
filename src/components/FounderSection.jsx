import { Heart } from 'lucide-react';


export default function FounderSection({
  onOpenScholarshipModal,
  stripInspectorActive
}) {
  const pillars = [
    {
      num: "01",
      title: "Your Sovereignty",
      desc: "You arrive in your own timing and depart when you are full. There are no spiritual hierarchies, no manufactured urgency, and no contracts binding your soul."
    },
    {
      num: "02",
      title: "Your Living Body",
      desc: "The body is not an obstacle to be bypassed; it is the holy vessel where spirit becomes tangible. We listen to somatic intelligence with quiet reverence."
    },
    {
      num: "03",
      title: "The Living Earth",
      desc: "Soil, stones, and ancient trees are conscious elder intelligences whose coherence restores what modern velocity and screens have disoriented."
    }
  ];

  return (
    <section 
      id="founder"
      className="py-10 sm:py-14"
    >
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 08 • Founder Feature Split, 3 Pillars & Living Root Fund
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* 2-Column Split Feature (Matches Reference Section 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Rounded Image Card with Floating Pill Badge */}
          <div className="lg:col-span-5 relative reveal-on-scroll">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[460px] sm:h-[500px] bg-[#131914]">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
                alt="Ancient woodland sanctuary"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131914]/85 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="font-sans font-bold text-xl">Telu'an Veyar</div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#D6E3CE]">
                  Founder & Spiritual Steward
                </div>
              </div>
            </div>

            {/* Floating Pill Tag (from reference) */}
            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wide">
              ✦ In-Person & Remote Woodland Alignment
            </div>
          </div>

          {/* Right Column: Founder Narrative & Numbered Pillars */}
          <div className="lg:col-span-7 space-y-8 reveal-on-scroll">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
                <span>Meet the Founder</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#131914] leading-tight">
                A Devotion to the <span className="font-accent">Earth's Living Memory.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed">
                For over three decades, my life has been held in communion with old-growth forests, stone ridges, and seasonal pulses. In 2024, after years of solitary woodland vigils and mentoring sincere seekers, the architecture of <strong className="text-[#131914] font-medium">Eco-Christed Living</strong> crystallized: uniting upward transcendent clarity with downward rooted soil calm.
              </p>
            </div>

            {/* Numbered Steps / Pillars from Reference */}
            <div className="space-y-4 pt-2">
              {pillars.map((p, idx) => {
                const staggerClass = `stagger-${idx + 1}`;
                return (
                  <div 
                    key={idx}
                    className={`p-5 rounded-2xl bg-white border border-[#E8E5DD] flex items-start gap-4 shadow-xs hover-lift reveal-on-scroll ${staggerClass}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#131914] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {p.num}
                    </div>
                    <div className="space-y-1">
                      <div className="font-sans font-semibold text-base text-[#131914]">
                        {p.title}
                      </div>
                      <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* The Living Root Scholarship Banner (Clean Rounded Inset Card) */}
        <div className="rounded-3xl bg-white border border-[#E8E5DD] p-8 sm:p-10 shadow-xs reveal-on-scroll">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#131914] font-bold">
                <Heart className="w-3.5 h-3.5 text-[#131914] fill-current" />
                <span>The Living Root Sacred Pledge</span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#131914]">
                No sincere soul is ever turned away <span className="font-accent">for want of means.</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed">
                We know financial tides ebb and flow. If you feel deeply called to The School of Light, Yellow Envelope Seminary, or SoulMirror Guidance but are currently navigating a tighter season, our scholarship fund exists to assist you with dignity and warmth.
              </p>

              <div className="text-xs font-mono text-[#656C64]">
                Direct Contact: <strong className="text-[#131914]">scholarship@foresttherapeutics.us</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={onOpenScholarshipModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#131914] hover:bg-[#253026] text-white text-xs font-medium uppercase tracking-wider transition-colors shadow-xs"
              >
                Request Scholarship
              </button>

              <button
                onClick={onOpenScholarshipModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-[#F7F5F0] text-[#131914] border border-[#E8E5DD] text-xs font-medium uppercase tracking-wider transition-colors"
              >
                Give to the Fund
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
