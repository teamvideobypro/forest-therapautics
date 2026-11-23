import { useState } from 'react';
import { X, CheckCircle2, Sparkles, Mail, ShieldCheck } from 'lucide-react';
import { SCHOOLS_DATA } from '../../data/sanctuaryData';

export default function CurriculumModal({ isOpen, onClose, mode = 'yellow-envelope' }) {
  const [ordered, setOrdered] = useState(false);

  if (!isOpen) return null;

  const isYellow = mode === 'yellow-envelope';
  const { schoolOfLight, yellowEnvelope } = SCHOOLS_DATA;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#E8E5DD] shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 text-[#131914] bg-white/80 hover:bg-white rounded-full shadow-md backdrop-blur-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isYellow ? (
          <>
            {/* Header with image */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0 bg-[#131914]">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                alt="Yellow Envelope Correspondence School"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6 space-y-1 text-white">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D6E3CE] text-[#131914]">
                    By-Mail • No Contracts
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-xs">
                    Postal Mystery School
                  </span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {yellowEnvelope.name}
                </h2>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              {ordered ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#D6E3CE] text-[#131914] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div className="font-mono uppercase tracking-widest text-xs text-[#131914] font-bold">
                    Sample Parcel Requested
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-[#131914]">
                    Lesson 01 Is Preparing for Dispatch
                  </h3>
                  <p className="text-xs sm:text-sm text-[#656C64] max-w-md mx-auto leading-relaxed">
                    Your postal parcel order has been received. Your hand-printed Lesson 01 on Earth-Yellow paper with consecrated resins will depart via USPS.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 rounded-full bg-[#131914] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#253026] transition-colors"
                  >
                    Return to Sanctuary
                  </button>
                </div>
              ) : (
                <>
                  {/* Exact description from card */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#656C64] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#131914]" />
                        <span>Monthly Handcrafted Postal Delivery</span>
                      </span>
                      <span className="font-mono font-bold text-sm text-[#131914]">
                        $25 / Lesson
                      </span>
                    </div>
                    <p className="font-sans text-sm text-[#131914] leading-relaxed">
                      Monthly 20-page hand-printed lesson on Earth Yellow paper, botanicals, and consecrated resins delivered via USPS. Pay-per-lesson with zero lock-in contracts.
                    </p>
                  </div>

                  {/* Sample Lesson Contents Box */}
                  <div className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] space-y-3">
                    <div className="font-sans font-bold text-xs uppercase tracking-wider text-[#131914]">
                      Sample Parcel (Lesson 01: The Rooted Vessel) Contents:
                    </div>
                    <ul className="space-y-2 text-xs text-[#131914]">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#131914] shrink-0 mt-0.5" />
                        <span><strong>20 Archival Pages on Earth-Yellow Paper:</strong> Hand-set woodcut illustrations and written doctrine on somatic coherence.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#131914] shrink-0 mt-0.5" />
                        <span><strong>Hand-Tied Botanical Ally:</strong> Muslin pouch containing wildcrafted Ohio white pine needles and sacred cedar.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#131914] shrink-0 mt-0.5" />
                        <span><strong>Consecrated Resin Tear:</strong> Ethically harvested piñon resin tear for your personal sanctuary flame.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#131914] shrink-0 mt-0.5" />
                        <span><strong>Contemplative Grimoire Prompts:</strong> 4 practical somatic alignment exercises to practice between moon cycles.</span>
                      </li>
                    </ul>
                  </div>

                  {/* 4-Year Arc Grid from landing page */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#131914]">
                      The 4-Year Correspondence Arc (48 Monthly Lessons):
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {yellowEnvelope.fourYearArc.map((arc, aIdx) => (
                        <div key={aIdx} className="p-3.5 rounded-2xl bg-white border border-[#E8E5DD] shadow-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-[#131914]">
                              Year 0{aIdx + 1}: {arc.title}
                            </span>
                            <span className="text-[10px] font-mono uppercase text-[#656C64]">
                              {arc.element}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#656C64] leading-relaxed">
                            {arc.focus}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 space-y-3">
                    <button
                      onClick={() => setOrdered(true)}
                      className="w-full py-3.5 rounded-full bg-[#131914] hover:bg-[#253026] text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-xs"
                    >
                      Order Sample Lesson 01 ($30)
                    </button>
                    <div className="flex items-center justify-center gap-3 text-[11px] text-[#656C64]">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>USPS Tracked Shipping</span>
                      </span>
                      <span>•</span>
                      <span>No Annual Contracts</span>
                      <span>•</span>
                      <span>Pause Anytime</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          /* PATH Stewardship Certification View */
          <>
            <div className="p-6 sm:p-8 pb-4 border-b border-[#E8E5DD] bg-[#F7F5F0]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#131914]" />
                <span>The School of Light • Academic Syllabus</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#131914]">
                PATH Stewardship Certification <span className="font-accent">(Levels 1–4)</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#656C64] mt-1">
                Our university curriculum balances intellectual cosmology, somatic nervous system regulation, and practical New Earth leadership.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1">
              <div className="space-y-3">
                {schoolOfLight.pathCertifications.map((p, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-bold text-sm text-[#131914]">
                        {p.level}: {p.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#131914] border border-[#E8E5DD] font-semibold">
                        SkillSpring Tracking
                      </span>
                    </div>
                    <p className="text-xs text-[#656C64]">
                      {p.focus}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#131914] text-white text-xs space-y-1.5 shadow-md">
                <div className="font-sans font-bold text-[#D6E3CE]">
                  Founding Year Opens October 31, 2026
                </div>
                <p className="text-white/80 leading-relaxed text-[11px]">
                  Enrollment opens on the eve of All Hallows. Begin with First Light ($0) or join the Second Ascension ($66/mo) to hold your founding seat.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-full bg-[#131914] hover:bg-[#253026] text-white font-medium text-xs tracking-wider uppercase transition-colors"
              >
                Close Curriculum Viewer
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
