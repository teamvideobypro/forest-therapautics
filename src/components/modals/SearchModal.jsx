import { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '../../data/sanctuaryData';


export default function SearchModal({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  // Build searchable index
  const index = [
    { title: "The School of Light (Digital University)", type: "School", section: "schools", desc: "4-tier PATH Certification university and WithMe community." },
    { title: "Yellow Envelope Seminary (By Mail)", type: "Seminary", section: "schools", desc: "4-year correspondence mystery school printed on Earth Yellow paper." },
    { title: "The Sovereign Signal Framework", type: "Course", section: "schools", desc: "AI as a sovereign mirror of self-discovery ($22 mini-course)." },
    { title: "Living Earth Remembrance Immersion", type: "Offering", section: "offerings", desc: "3.5-hr in-person woodland alignment rite ($1,111)." },
    { title: "SoulMirror Guidance Suite", type: "Offering", section: "offerings", desc: "1:1 reflective containers online or in-person ($296–$1,776)." },
    { title: "Forest Coherence Anointing Oil", type: "Apothecary", section: "apothecary", desc: "Small-batch cedar, spikenard, and wild pine resin oil ($48)." },
    { title: "The Living Root Scholarship Fund", type: "Scholarship", section: "founder", desc: "Tuition support for sincere seekers in tighter financial seasons." },
    { title: "What Is Eco-Christed Living? (Free 3-Lesson Course)", type: "Free Gift", section: "footer", desc: "Introductory email course on the Two Ascensions." },
    ...FAQ_DATA.map(f => ({ title: f.q, type: "FAQ", section: "faq", desc: f.a }))
  ];

  const results = query.trim() === ''
    ? index.slice(0, 5)
    : index.filter(i => 
        i.title.toLowerCase().includes(query.toLowerCase()) || 
        i.desc.toLowerCase().includes(query.toLowerCase()) ||
        i.type.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (item) => {
    onClose();
    if (onSelectResult) onSelectResult(item.section);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#F6F1E7] border border-[#3B2E26]/20 p-6 shadow-2xl apothecary-card">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-4 right-4 p-1.5 text-[#3B2E26] hover:bg-[#EFE6D2] rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#3B2E26]/10">
          <Search className="w-4 h-4 text-[#C99738]" />
          <input
            type="text"
            autoFocus
            placeholder="Search offerings, schools, philosophy, or apothecary..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#1F362C] focus:outline-hidden placeholder-[#6B5B4E]/60"
          />
        </div>

        <div className="max-h-80 overflow-y-auto space-y-2">
          {results.length === 0 ? (
            <p className="text-xs text-[#6B5B4E] text-center py-6">
              No exact match found in sanctuary archives.
            </p>
          ) : (
            results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(item)}
                className="p-3 rounded-lg bg-[#EFE6D2]/60 hover:bg-[#EFE6D2] border border-[#3B2E26]/10 cursor-pointer transition-colors flex items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-sm text-[#1F362C]">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#1F362C]/10 text-[#1F362C]">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5B4E] line-clamp-1 mt-0.5">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C99738] shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
