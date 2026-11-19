import { X } from 'lucide-react';
import { SCHOOLS_DATA } from '../../data/sanctuaryData';

export default function CurriculumModal({ isOpen, onClose, mode = 'school-of-light' }) {
  if (!isOpen) return null;

  const isYellow = mode === 'yellow-envelope';
  const { schoolOfLight } = SCHOOLS_DATA;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className={`relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto ${
        isYellow ? 'yellow-envelope-frame' : 'bg-[#F6F1E7] border border-[#3B2E26]/20 apothecary-card'
      }`}>
        <button
          onClick={onClose}
          aria-label="Close curriculum modal"
          className="absolute top-4 right-4 p-2 text-[#3B2E26] hover:bg-[#EFE6D2] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isYellow ? (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C99738]/20 text-[#9A7225] uppercase font-bold">
                Correspondence Mystery School
              </span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#1F362C]">
              Inside the Yellow Envelope
            </h3>

            <p className="text-sm text-[#6B5B4E] leading-relaxed">
              Every month on the New Moon, a hand-printed goldenrod yellow envelope departs by mail to your physical door. Here is an overview of what arrives:
            </p>

            <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#C99738]/40 space-y-3 text-xs text-[#3B2E26]">
              <div className="font-serif font-bold text-base text-[#1F362C]">
                Sample Lesson Contents (Lesson 01: The Rooted Vessel):
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C99738] font-bold">1.</span>
                  <span><strong>20 Archival Pages on Earth-Yellow Paper:</strong> Hand-set woodcut illustrations and written doctrine on somatic coherence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C99738] font-bold">2.</span>
                  <span><strong>Hand-Tied Botanical Ally:</strong> A muslin pouch containing wildcrafted Ohio white pine needles and sacred cedar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C99738] font-bold">3.</span>
                  <span><strong>Consecrated Altar Stone / Resin Tear:</strong> Ethically harvested piñon resin tear for your personal sanctuary flame.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C99738] font-bold">4.</span>
                  <span><strong>Contemplative Grimoire Prompts:</strong> 4 practical somatic alignment exercises to practice between moon cycles.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/60 border border-[#3B2E26]/10 text-xs text-[#6B5B4E]">
              <strong>Pay-Per-Lesson Policy:</strong> $30 first introductory lesson, $25 per standard lesson, or $55 for the full ceremonial box. No annual contracts; pause or stop anytime.
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#C99738] hover:bg-[#B38226] text-[#1F362C] font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Close Sample Viewer
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1F362C]/10 text-[#1F362C] uppercase font-bold">
                The School of Light Curriculum
              </span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#1F362C]">
              PATH Stewardship Certification (Levels 1–4)
            </h3>

            <p className="text-sm text-[#6B5B4E] leading-relaxed">
              Our university curriculum balances intellectual cosmology, somatic nervous system regulation, and practical New Earth leadership.
            </p>

            <div className="space-y-3">
              {schoolOfLight.pathCertifications.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#EFE6D2]/60 border border-[#3B2E26]/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-[#1F362C] text-base">
                      {p.level}: {p.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#9A7225] font-semibold">
                      SkillSpring Tracking
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5B4E]">
                    {p.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#1F362C] text-[#F6F1E7] text-xs space-y-1">
              <div className="font-serif font-bold text-[#C99738] text-sm">
                Founding Year Opens October 31, 2026
              </div>
              <p className="opacity-80">
                Enrollment opens on the eve of All Hallows. Begin with First Light ($0) or join the First Ascension ($33/mo) to hold your founding seat.
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#1F362C] hover:bg-[#162820] text-[#F6F1E7] font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Return to Schools Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
