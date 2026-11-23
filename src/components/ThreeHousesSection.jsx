import { ArrowUpRight, CheckCircle2, BookOpen, Users, Compass } from 'lucide-react';
import { THREE_HOUSES } from '../data/sanctuaryData';

export default function ThreeHousesSection({
  onExploreWix,
  onOpenClassroomModal,
  onOpenCommunityModal,
  stripInspectorActive
}) {
  return (
    <section 
      id="three-houses"
      className="py-10 sm:py-14"
    >
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 03 • Three Houses Multi-Tone Ecosystem Cards
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
            <span>The Living Ecosystem</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#131914] leading-tight mb-3">
            One Living Sanctuary. <span className="font-accent">Three Connected Houses.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed">
            To preserve tranquility, each dimension lives in a dedicated space built specifically for its sacred purpose.
          </p>
        </div>

        {/* 3 Multi-Tone Cards (White, Deep Dark, Pale Sage from Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {THREE_HOUSES.map((house, idx) => {
            const isWix = house.id === 'wix';
            const isClassroom = house.id === 'skillspring';
            const isCommunity = house.id === 'withme';
            const staggerClass = idx === 0 ? 'stagger-1' : idx === 1 ? 'stagger-2' : 'stagger-3';

            // Distinct styling per card based on reference
            const cardStyle = isWix
              ? "bg-white text-[#131914] border border-[#E8E5DD] hover-lift shadow-xs"
              : isClassroom
              ? "bg-[#131914] text-white border border-white/10 hover-dark-lift shadow-xl"
              : "bg-[#D6E3CE] text-[#131914] border border-[#C6D6BD] hover-lift shadow-xs";

            const badgeStyle = isWix
              ? "bg-[#F7F5F0] text-[#131914]"
              : isClassroom
              ? "bg-white/10 text-[#D6E3CE]"
              : "bg-white/60 text-[#131914]";

            const borderLine = isClassroom ? "border-white/10" : "border-[#131914]/10";

            return (
              <div 
                key={house.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 reveal-on-scroll ${staggerClass} ${cardStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold opacity-75">
                      {house.houseNumber}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${badgeStyle}`}>
                      {house.badge}
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl font-bold tracking-tight mb-1">
                    {house.title}
                  </h3>
                  <div className="text-xs font-mono opacity-80 mb-4 flex items-center gap-1.5">
                    {isWix && <Compass className="w-3.5 h-3.5" />}
                    {isClassroom && <BookOpen className="w-3.5 h-3.5" />}
                    {isCommunity && <Users className="w-3.5 h-3.5" />}
                    <span>{house.platform}</span>
                  </div>

                  <p className="text-xs sm:text-sm opacity-85 leading-relaxed mb-6">
                    {house.description}
                  </p>

                  <div className={`space-y-2.5 border-t ${borderLine} pt-6 mb-8 text-xs`}>
                    {house.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isClassroom ? 'text-[#D6E3CE]' : 'text-[#131914]'}`} />
                        <span className="opacity-90">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 border-t ${borderLine}`}>
                  {isWix && (
                    <button
                      onClick={() => onExploreWix && onExploreWix('wix')}
                      className="w-full py-3 rounded-full bg-[#131914] text-white hover:bg-[#222B23] text-xs font-medium uppercase tracking-wider transition-colors shadow-xs"
                    >
                      Explore Public Sanctuary
                    </button>
                  )}

                  {isClassroom && (
                    <button
                      onClick={() => onOpenClassroomModal && onOpenClassroomModal('skillspring')}
                      className="w-full py-3 rounded-full bg-white text-[#131914] hover:bg-white/90 text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Enter Classroom Portal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {isCommunity && (
                    <button
                      onClick={() => onOpenCommunityModal && onOpenCommunityModal('withme')}
                      className="w-full py-3 rounded-full bg-[#131914] text-white hover:bg-[#222B23] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Enter Member Community</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
