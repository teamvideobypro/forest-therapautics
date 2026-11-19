import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { SCHOOLS_DATA } from '../data/sanctuaryData';


export default function SchoolsSection({
  onOpenCurriculum,
  onOpenYellowEnvelope,
  onOpenCourseModal,
  stripInspectorActive
}) {
  const { schoolOfLight, yellowEnvelope, signatureCourses } = SCHOOLS_DATA;

  return (
    <section 
      id="schools"
      className="py-10 sm:py-14"
    >
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 04 • 4-Card Strands, Pricing Tiers & 4-Year Arc
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* PART 1: 4-CARD HORIZONTAL STRAND STRIP ("Small rituals. Meaningful results.") */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
                <span>Foundational Portals</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#131914]">
                Signature Strands & <span className="font-accent">Gateways.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#656C64] max-w-md">
              Uniting sovereign technology, analog culture, living tarot, and physical postal study into one coherent curriculum.
            </p>
          </div>

          {/* 4 Distinct Styled Rounded Cards from Reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Dark Image Card */}
            <div 
              onClick={() => onOpenCourseModal(signatureCourses[0])}
              className="group relative rounded-3xl overflow-hidden h-[380px] p-6 flex flex-col justify-end text-white cursor-pointer hover-lift shadow-sm bg-[#131914]"
            >
              <img
                src={signatureCourses[0].image}
                alt={signatureCourses[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131914] via-[#131914]/40 to-transparent" />
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-xs font-semibold">
                  {signatureCourses[0].price}
                </span>
                <h3 className="font-sans font-semibold text-lg text-white">
                  {signatureCourses[0].title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  {signatureCourses[0].description}
                </p>
              </div>
            </div>

            {/* Card 2: Deep Dark Green Card */}
            <div 
              onClick={() => onOpenCourseModal(signatureCourses[1])}
              className="rounded-3xl p-6 h-[380px] flex flex-col justify-between text-white cursor-pointer hover-dark-lift shadow-sm bg-[#18201A] border border-white/10"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-[#D6E3CE] font-semibold">
                  {signatureCourses[1].badge}
                </span>
                <h3 className="font-sans font-semibold text-xl text-white pt-2">
                  {signatureCourses[1].title}
                </h3>
                <p className="text-xs text-white/75 leading-relaxed pt-1">
                  {signatureCourses[1].description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D6E3CE]">
                <span>{signatureCourses[1].lessons}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3: Clean White Card */}
            <div 
              onClick={() => onOpenCourseModal(signatureCourses[2])}
              className="rounded-3xl p-6 h-[380px] flex flex-col justify-between text-[#131914] cursor-pointer hover-lift shadow-xs bg-white border border-[#E8E5DD]"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-[#F7F5F0] text-[#131914] font-semibold border border-[#E8E5DD]">
                  {signatureCourses[2].badge}
                </span>
                <h3 className="font-sans font-semibold text-xl text-[#131914] pt-2">
                  {signatureCourses[2].title}
                </h3>
                <p className="text-xs text-[#656C64] leading-relaxed pt-1">
                  {signatureCourses[2].description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E5DD] flex items-center justify-between text-xs font-semibold text-[#131914]">
                <span>Begin Free with The Fool</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 4: Pale Sage Green Tinted Card */}
            <div 
              onClick={() => onOpenYellowEnvelope()}
              className="rounded-3xl p-6 h-[380px] flex flex-col justify-between text-[#131914] cursor-pointer hover-lift shadow-xs bg-[#D6E3CE] border border-[#C6D6BD]"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/70 text-[#131914] font-semibold">
                  By Mail • No Contracts
                </span>
                <h3 className="font-sans font-semibold text-xl text-[#131914] pt-2">
                  Yellow Envelope Seminary
                </h3>
                <p className="text-xs text-[#131914]/80 leading-relaxed pt-1">
                  Monthly 20-page hand-printed lesson on Earth Yellow paper, botanicals, and consecrated resins delivered via USPS.
                </p>
              </div>

              <div className="pt-4 border-t border-[#131914]/15 flex items-center justify-between text-xs font-semibold text-[#131914]">
                <span>$25 / Lesson • Open Sample</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: 3-COLUMN PRICING TIERS ("Make space for your wellbeing") */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
              <span>Transparent University Membership</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#131914] mb-3">
              The School of Light <span className="font-accent">Membership.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#656C64]">
              Founding Year opening October 31, 2026. Zero contracts. Cancel or pause anytime with one click.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Tier 1: First Light (White Card) */}
            <div className="rounded-3xl bg-white border border-[#E8E5DD] p-8 flex flex-col justify-between hover-lift shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-sm text-[#131914]">First Light</span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F7F5F0] text-[#656C64]">Seeker Doorway</span>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-sans text-4xl font-bold tracking-tight text-[#131914]">$0</span>
                  <span className="text-xs text-[#656C64]">/ Free Offering</span>
                </div>

                <p className="text-xs text-[#656C64] leading-relaxed mb-6">
                  {schoolOfLight.tiers[0].description}
                </p>

                <div className="space-y-2.5 border-t border-[#E8E5DD] pt-6 mb-8 text-xs text-[#131914]">
                  {schoolOfLight.tiers[0].includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#131914] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCurriculum('school-of-light')}
                className="w-full py-3 rounded-full border border-[#E8E5DD] hover:border-[#131914] text-[#131914] font-medium text-xs tracking-wide transition-colors"
              >
                Begin with First Light
              </button>
            </div>

            {/* Tier 2: Second Ascension (Featured Dark Card from Reference) */}
            <div className="rounded-3xl bg-[#131914] text-white border border-white/10 p-8 flex flex-col justify-between hover-dark-lift shadow-xl relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-sm text-white">Second Ascension</span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#D6E3CE] text-[#131914] font-bold">Most Popular</span>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-sans text-4xl font-bold tracking-tight text-white">$66</span>
                  <span className="text-xs text-white/70">/ month</span>
                </div>

                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  {schoolOfLight.tiers[2].description}
                </p>

                <div className="space-y-2.5 border-t border-white/10 pt-6 mb-8 text-xs text-white/90">
                  {schoolOfLight.tiers[2].includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D6E3CE] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCurriculum('school-of-light')}
                className="w-full py-3.5 rounded-full bg-white hover:bg-white/90 text-[#131914] font-medium text-xs tracking-wide transition-colors shadow-sm"
              >
                Enter Second Ascension
              </button>
            </div>

            {/* Tier 3: All Access Stewardship (White Card) */}
            <div className="rounded-3xl bg-white border border-[#E8E5DD] p-8 flex flex-col justify-between hover-lift shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-sm text-[#131914]">All Access Stewardship</span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F7F5F0] text-[#656C64]">Guidance & Mastery</span>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-sans text-4xl font-bold tracking-tight text-[#131914]">$111</span>
                  <span className="text-xs text-[#656C64]">/ month</span>
                </div>

                <p className="text-xs text-[#656C64] leading-relaxed mb-6">
                  {schoolOfLight.tiers[3].description}
                </p>

                <div className="space-y-2.5 border-t border-[#E8E5DD] pt-6 mb-8 text-xs text-[#131914]">
                  {schoolOfLight.tiers[3].includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#131914] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCurriculum('school-of-light')}
                className="w-full py-3 rounded-full border border-[#E8E5DD] hover:border-[#131914] text-[#131914] font-medium text-xs tracking-wide transition-colors"
              >
                Step into All Access
              </button>
            </div>
          </div>
        </div>

        {/* PART 3: 4-STEP PROCESS CARDS (Yellow Envelope Seminary 4-Year Arc) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
                <span>By-Mail Mystery School</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#131914]">
                The 4-Year Correspondence <span className="font-accent">Arc.</span>
              </h2>
            </div>

            <button
              onClick={() => onOpenYellowEnvelope()}
              className="text-xs font-semibold text-[#131914] hover:underline flex items-center gap-1"
            >
              <span>View Sample Postal Lesson</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {yellowEnvelope.fourYearArc.map((arc, aIdx) => (
              <div 
                key={aIdx}
                className="p-6 rounded-3xl bg-white border border-[#E8E5DD] shadow-xs flex flex-col justify-between hover-lift h-[220px]"
              >
                <div>
                  <div className="w-7 h-7 rounded-full bg-[#F7F5F0] border border-[#E8E5DD] flex items-center justify-center font-mono text-xs font-bold text-[#131914] mb-3">
                    0{aIdx + 1}
                  </div>
                  <div className="font-sans font-semibold text-lg text-[#131914] mb-1">
                    {arc.title}
                  </div>
                  <div className="text-[11px] font-mono text-[#656C64] uppercase tracking-wider mb-2">
                    {arc.element}
                  </div>
                  <p className="text-xs text-[#656C64] leading-relaxed">
                    {arc.focus}
                  </p>
                </div>

                <div className="text-[10px] font-mono text-[#131914]/70 pt-2 border-t border-[#E8E5DD]">
                  {arc.year} • 12 Monthly Parcels
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
