import { 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { OFFERINGS_DATA } from '../data/sanctuaryData';


export default function OfferingsSection({
  onBookImmersion,
  onBookSoulMirror,
  onOpenSoulCall,
  onReserveGathering,
  stripInspectorActive
}) {
  const { livingEarthImmersion, soulMirrorSuite, upcomingGatherings } = OFFERINGS_DATA;

  return (
    <section 
      id="offerings"
      className="py-8 sm:py-10"
    >
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 05 • Dark Inset Container & Divided Offering Rows
          </span>
        </div>
      )}

      {/* Main Dark Inset Container from Reference */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="rounded-3xl bg-[#131914] text-white p-8 sm:p-12 lg:p-14 shadow-xl border border-white/10 space-y-8 sm:space-y-10">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#D6E3CE] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Guidance & Living Gatherings</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                Find the container that <span className="font-accent-light">fits your rhythm.</span>
              </h2>
            </div>

            <button
              onClick={onOpenSoulCall}
              className="px-6 py-3 rounded-full bg-white hover:bg-white/90 text-[#131914] font-medium text-xs sm:text-sm tracking-wide transition-all self-start md:self-auto shrink-0 shadow-sm"
            >
              Book Free Soul Call
            </button>
          </div>

          {/* Clean Horizontal Divided Row Items (Exactly matching reference's dark list) */}
          <div className="divide-y divide-white/10">
            {/* Row 1: Living Earth Immersion */}
            <div 
              onClick={() => onBookImmersion(livingEarthImmersion)}
              className="py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group hover:bg-white/5 px-4 -mx-4 rounded-2xl transition-colors"
            >
              <div className="md:w-1/3">
                <div className="font-sans font-semibold text-lg sm:text-xl text-white group-hover:text-[#D6E3CE] transition-colors">
                  {livingEarthImmersion.title}
                </div>
                <div className="text-xs text-white/60 font-mono mt-0.5">
                  {livingEarthImmersion.duration} • In-Person Sacred Woodland
                </div>
              </div>

              <div className="md:w-1/2 text-xs sm:text-sm text-white/70 line-clamp-2">
                {livingEarthImmersion.description}
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                <span className="font-sans font-semibold text-lg sm:text-xl text-white">
                  {livingEarthImmersion.price}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#D6E3CE] group-hover:text-[#131914] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Rows for SoulMirror Suite */}
            {soulMirrorSuite.map((session) => (
              <div
                key={session.id}
                onClick={() => onBookSoulMirror(session)}
                className="py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group hover:bg-white/5 px-4 -mx-4 rounded-2xl transition-colors"
              >
                <div className="md:w-1/3">
                  <div className="font-sans font-semibold text-lg sm:text-xl text-white group-hover:text-[#D6E3CE] transition-colors">
                    {session.title}
                  </div>
                  <div className="text-xs text-white/60 font-mono mt-0.5">
                    {session.duration} • {session.format}
                  </div>
                </div>

                <div className="md:w-1/2 text-xs sm:text-sm text-white/70 line-clamp-2">
                  {session.description}
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                  <span className="font-sans font-semibold text-lg sm:text-xl text-white">
                    {session.price}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#D6E3CE] group-hover:text-[#131914] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}

            {/* Row 5: Upcoming Public Gatherings */}
            <div 
              onClick={() => onReserveGathering(upcomingGatherings[0])}
              className="py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group hover:bg-white/5 px-4 -mx-4 rounded-2xl transition-colors"
            >
              <div className="md:w-1/3">
                <div className="font-sans font-semibold text-lg sm:text-xl text-white group-hover:text-[#D6E3CE] transition-colors">
                  {upcomingGatherings[0].title}
                </div>
                <div className="text-xs text-[#D6E3CE] font-mono mt-0.5">
                  {upcomingGatherings[0].date}
                </div>
              </div>

              <div className="md:w-1/2 text-xs sm:text-sm text-white/70 line-clamp-2">
                {upcomingGatherings[0].description}
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                <span className="font-sans font-semibold text-sm text-white/80">
                  {upcomingGatherings[0].pricing}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#D6E3CE] group-hover:text-[#131914] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
