import { useState } from 'react';
import { 
  Layers, 
  Compass, 
  Route, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { SITE_ARCHITECTURE_BLUEPRINT } from '../data/sanctuaryData';

export default function BlueprintView({ onSwitchToHomepage }) {
  const [activeTab, setActiveTab] = useState('system'); // system, sitemap, journeys, roadmap
  const [selectedSystemNode, setSelectedSystemNode] = useState('wix-core');
  const [selectedJourneyIdx, setSelectedJourneyIdx] = useState(0);

  const { overview, threeHousesSystem, sevenPathwaysSitemap, conversionJourneys, fourPhaseRoadmap } = SITE_ARCHITECTURE_BLUEPRINT;

  return (
    <div className="min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Executive Header Banner */}
        <div className="mb-10 p-8 sm:p-12 rounded-3xl bg-[#131914] text-white shadow-xl relative overflow-hidden border border-white/10">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D6E3CE] text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Architectural Blueprint • Complimentary Pre-Collaboration</span>
              </div>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                Site Architecture & <span className="font-accent-light">Ecosystem Blueprint</span>
              </h1>
              <p className="font-sans text-xs sm:text-sm text-white/80 max-w-2xl font-normal leading-relaxed">
                Prepared specifically for founder <strong>Telu'an Veyar</strong> to clarify technical boundaries, the 7-pathway navigation hierarchy, Stripe payment integrity, and the 7-week fixed delivery roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch md:items-center gap-3 shrink-0">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-[10px] font-mono text-[#D6E3CE] uppercase">Fixed Scope</div>
                <div className="font-sans text-2xl font-bold text-white">{overview.totalInvestment}</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-[10px] font-mono text-[#D6E3CE] uppercase">Timeline</div>
                <div className="font-sans text-2xl font-bold text-white">{overview.totalEstimatedWeeks}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Navigation Tabs (Pill style from Reference) */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-white border border-[#E8E5DD] mb-10 shadow-xs">
          <button
            onClick={() => setActiveTab('system')}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'system'
                ? 'bg-[#131914] text-white shadow-xs'
                : 'text-[#656C64] hover:text-[#131914]'
            }`}
          >
            <Layers className="w-4 h-4 text-[#D6E3CE]" />
            <span>1. Three Houses System Flow</span>
          </button>

          <button
            onClick={() => setActiveTab('sitemap')}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'sitemap'
                ? 'bg-[#131914] text-white shadow-xs'
                : 'text-[#656C64] hover:text-[#131914]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#D6E3CE]" />
            <span>2. 7-Pathway Sitemap Hierarchy</span>
          </button>

          <button
            onClick={() => setActiveTab('journeys')}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'journeys'
                ? 'bg-[#131914] text-white shadow-xs'
                : 'text-[#656C64] hover:text-[#131914]'
            }`}
          >
            <Route className="w-4 h-4 text-[#D6E3CE]" />
            <span>3. Visitor Conversion Journeys</span>
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'roadmap'
                ? 'bg-[#131914] text-white shadow-xs'
                : 'text-[#656C64] hover:text-[#131914]'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#D6E3CE]" />
            <span>4. 4-Phase Delivery Roadmap</span>
          </button>
        </div>

        {/* TAB 1: THE THREE HOUSES SYSTEM FLOW */}
        {activeTab === 'system' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E5DD] shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E8E5DD]">
                <div>
                  <h2 className="font-sans text-2xl font-bold text-[#131914]">
                    Interactive System Ecosystem Architecture
                  </h2>
                  <p className="text-xs text-[#656C64]">
                    Click any node to inspect data flow, platform ownership, and out-of-scope boundaries.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#131914] font-semibold bg-[#D6E3CE] px-3.5 py-1.5 rounded-full">
                  Stripe-Only Payment Integrity
                </span>
              </div>

              {/* Node Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {threeHousesSystem.map((node) => {
                  const isSelected = selectedSystemNode === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedSystemNode(node.id)}
                      className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                        isSelected 
                          ? 'bg-[#131914] text-white border-white/20 shadow-lg scale-102' 
                          : 'bg-[#F7F5F0] text-[#131914] border-[#E8E5DD] hover:border-[#131914]/40'
                      }`}
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#D6E3CE] mb-1 font-semibold">
                        {node.type}
                      </div>
                      <div className="font-sans font-semibold text-lg mb-2">
                        {node.name}
                      </div>
                      <div className="text-xs opacity-75 line-clamp-2">
                        {node.responsibilities[0]}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Detailed Node Inspector Panel */}
              {(() => {
                const node = threeHousesSystem.find(n => n.id === selectedSystemNode) || threeHousesSystem[0];
                return (
                  <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E8E5DD]">
                      <div>
                        <span className="text-xs font-mono uppercase text-[#656C64] font-bold">
                          Selected Component Inspector:
                        </span>
                        <h3 className="font-sans text-2xl font-bold text-[#131914]">
                          {node.name}
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white text-[#131914] border border-[#E8E5DD] font-mono text-xs font-semibold">
                        Status: Active Blueprint Core
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#131914]">
                      <div>
                        <div className="font-sans uppercase tracking-wider font-semibold text-[#131914] mb-3">
                          System Responsibilities & Integrations:
                        </div>
                        <ul className="space-y-2">
                          {node.responsibilities.map((r, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#131914] shrink-0 mt-0.5" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-white border border-[#E8E5DD]">
                          <div className="font-sans uppercase tracking-wider font-semibold text-[#131914] mb-1">
                            Owner Control & Editing Guarantee:
                          </div>
                          <p className="text-[#656C64] leading-relaxed">
                            {node.clientOwnership}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-[#E8E5DD]">
                          <div className="font-sans uppercase tracking-wider font-semibold text-[#131914] mb-1">
                            External Connected Services:
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {node.connections.map((c, cIdx) => (
                              <span key={cIdx} className="px-2.5 py-1 rounded-full bg-[#F7F5F0] border border-[#E8E5DD] font-mono text-[11px] text-[#131914]">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Out-of-Scope Callout */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8E5DD] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-mono text-[#131914] font-bold uppercase tracking-wider">
                  Clarity of Scope & Non-Duplication:
                </span>
                <p className="text-[#656C64]">
                  SkillSpring, WithMe, and Zoom are integrated third-party destinations. We configure clean door-to-door handoffs so Telu'an never pays twice or maintains redundant databases.
                </p>
              </div>
              <button
                onClick={onSwitchToHomepage}
                className="px-6 py-2.5 rounded-full bg-[#131914] text-white font-medium uppercase tracking-wider shrink-0 hover:bg-[#253026] transition-colors"
              >
                View Live Homepage Concept →
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: 7-PATHWAY SITEMAP HIERARCHY */}
        {activeTab === 'sitemap' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-3xl bg-white border border-[#E8E5DD] mb-6">
              <h2 className="font-sans text-2xl font-bold text-[#131914] mb-2">
                Clean 7-Pathway Navigation Architecture
              </h2>
              <p className="text-xs text-[#656C64]">
                Replaces the former 15+ scattered GoDaddy links with 7 calm, intuitive doorways. Each page maps directly to Native Wix strips with full Global SEO & AI Discoverability schema.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sevenPathwaysSitemap.map((pathway, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-[#E8E5DD] p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-[#131914]">
                        Pathway 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F7F5F0] text-[#131914]">
                        {pathway.status}
                      </span>
                    </div>

                    <h3 className="font-sans text-xl font-bold text-[#131914] mb-2">
                      {pathway.pathway}
                    </h3>

                    <div className="text-[11px] font-mono text-[#656C64] mb-4 pb-2 border-b border-[#E8E5DD]">
                      SEO Entity: {pathway.seo}
                    </div>

                    <div className="space-y-1.5 text-xs text-[#131914]">
                      {pathway.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2">
                          <span className="text-[#131914] shrink-0">•</span>
                          <span className="leading-tight text-[#656C64]">{sec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E8E5DD] text-[11px] font-mono text-[#656C64]">
                    Route: <strong className="text-[#131914]">{pathway.route}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: VISITOR CONVERSION JOURNEYS */}
        {activeTab === 'journeys' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Journey Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {conversionJourneys.map((j, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedJourneyIdx(idx)}
                  className={`py-2.5 px-5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    selectedJourneyIdx === idx
                      ? 'bg-[#131914] text-white shadow-xs'
                      : 'bg-white text-[#656C64] border border-[#E8E5DD] hover:text-[#131914]'
                  }`}
                >
                  {j.title}
                </button>
              ))}
            </div>

            {(() => {
              const journey = conversionJourneys[selectedJourneyIdx];
              return (
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E5DD] shadow-xs space-y-8">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#656C64] font-bold">
                      Target Archetype:
                    </span>
                    <h3 className="font-sans text-2xl font-bold text-[#131914] mt-1">
                      {journey.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#656C64] mt-1">
                      {journey.archetype}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {journey.steps.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] relative flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-7 h-7 rounded-full bg-[#131914] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                            {sIdx + 1}
                          </div>
                          <div className="font-sans font-bold text-base text-[#131914] mb-2">
                            {st.step}
                          </div>
                          <p className="text-xs text-[#656C64] leading-relaxed">
                            {st.detail}
                          </p>
                        </div>

                        {sIdx < 3 && (
                          <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#131914]">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 4: 4-PHASE DELIVERY ROADMAP */}
        {activeTab === 'roadmap' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E5DD] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#656C64] font-bold">
                  Zero Developer Lock-In Guarantee:
                </span>
                <h3 className="font-sans text-2xl font-bold text-[#131914]">
                  Complete Sovereign Ownership for Telu'an Veyar
                </h3>
                <p className="text-xs text-[#656C64] max-w-2xl">
                  Every section is built with native Wix Editor horizontal strips. Upon launch, you will receive a 60-minute video walkthrough showing how to edit every word, image, and price independently.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#131914] text-white text-center shrink-0">
                <div className="text-[10px] font-mono text-[#D6E3CE] uppercase">Fixed Scope Total</div>
                <div className="font-sans text-3xl font-bold">$3,000</div>
                <div className="text-[10px] text-white/70">7 Weeks to Launch</div>
              </div>
            </div>

            <div className="space-y-4">
              {fourPhaseRoadmap.map((phase, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-3xl bg-white border border-[#E8E5DD] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-sans text-xl font-bold text-[#131914]">
                        {phase.phase}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F7F5F0] text-[#131914] font-mono text-xs font-semibold">
                        {phase.duration}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#656C64]">
                      {phase.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#131914] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-[10px] font-mono text-[#656C64] uppercase">Milestone</div>
                    <div className="font-sans text-2xl font-bold text-[#131914]">
                      {phase.investment}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
