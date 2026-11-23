import { useState } from 'react';
import { 
  ChevronDown, 
  Bot
} from 'lucide-react';
import { FAQ_DATA } from '../data/sanctuaryData';


export default function KnowledgeFaqSection({
  onOpenAiGuide,
  stripInspectorActive
}) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section 
      id="faq"
      className="py-10 sm:py-14"
    >
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 09 • 2-Column Clean FAQ Accordion (GEO / AIO)
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (4 cols, from Reference) */}
          <div className="lg:col-span-4 space-y-6 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
              <span>AI Discoverability</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#131914] leading-tight">
                Questions, <span className="font-accent">gently answered.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed">
                Clear, transparent orientation on our Three Houses ecosystem, postal delivery, financial integrity, and sacred practices.
              </p>
            </div>

            <button
              onClick={onOpenAiGuide}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#131914] hover:bg-[#253026] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-xs hover-lift"
            >
              <Bot className="w-4 h-4 text-[#D6E3CE]" />
              <span>Ask Sanctuary Guide AI</span>
            </button>
          </div>

          {/* Right Column: Clean Divider Accordion (8 cols) */}
          <div className="lg:col-span-8 divide-y divide-[#E8E5DD] border-y border-[#E8E5DD] reveal-on-scroll">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-5 sm:py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-sans text-base sm:text-lg font-medium text-[#131914] hover:text-[#656C64] transition-colors"
                  >
                    <span>{item.q}</span>
                    <div className="w-7 h-7 rounded-full bg-white border border-[#E8E5DD] flex items-center justify-center shrink-0">
                      <ChevronDown 
                        className={`w-4 h-4 text-[#131914] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 text-xs sm:text-sm text-[#656C64] leading-relaxed font-sans max-w-2xl animate-fadeIn">
                      <p className="whitespace-pre-line">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
