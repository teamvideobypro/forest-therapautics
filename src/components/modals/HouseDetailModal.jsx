import { useState } from 'react';
import { X, CheckCircle2, BookOpen, Users, Compass, ArrowUpRight, Sparkles } from 'lucide-react';
import { THREE_HOUSES, SCHOOLS_DATA } from '../../data/sanctuaryData';

export default function HouseDetailModal({ isOpen, onClose, initialHouseId = 'skillspring' }) {
  const [selectedHouseId, setSelectedHouseId] = useState(initialHouseId);
  const [portalOpened, setPortalOpened] = useState(false);

  if (!isOpen) return null;

  const currentHouse = THREE_HOUSES.find(h => h.id === selectedHouseId) || THREE_HOUSES[1];
  const { schoolOfLight } = SCHOOLS_DATA;

  const houseImages = {
    wix: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    skillspring: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    withme: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
  };

  const isClassroom = currentHouse.id === 'skillspring';
  const isCommunity = currentHouse.id === 'withme';
  const isWix = currentHouse.id === 'wix';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#E8E5DD] shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close house details"
          className="absolute top-4 right-4 z-20 p-2.5 text-[#131914] bg-white/80 hover:bg-white rounded-full shadow-md backdrop-blur-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Photographic Header */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0 bg-[#131914]">
          <img
            src={houseImages[currentHouse.id]}
            alt={currentHouse.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Overlaid Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div className="space-y-1 text-white">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-[#D6E3CE] backdrop-blur-xs">
                  {currentHouse.houseNumber}
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 backdrop-blur-xs">
                  {currentHouse.badge}
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {currentHouse.title}
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs text-white font-mono">
              {isWix && <Compass className="w-3.5 h-3.5 text-[#D6E3CE]" />}
              {isClassroom && <BookOpen className="w-3.5 h-3.5 text-[#D6E3CE]" />}
              {isCommunity && <Users className="w-3.5 h-3.5 text-[#D6E3CE]" />}
              <span>{currentHouse.platform}</span>
            </div>
          </div>
        </div>

        {/* 3 Houses Switcher Tabs */}
        <div className="px-6 pt-4 pb-2 border-b border-[#E8E5DD] bg-[#F7F5F0]">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {THREE_HOUSES.map((h) => (
              <button
                key={h.id}
                onClick={() => {
                  setSelectedHouseId(h.id);
                  setPortalOpened(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedHouseId === h.id
                    ? 'bg-[#131914] text-white shadow-xs'
                    : 'text-[#656C64] hover:text-[#131914] hover:bg-white/60'
                }`}
              >
                <span>{h.houseNumber}: {h.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {/* Subtitle / Role */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#656C64] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#131914]" />
              <span>{currentHouse.role}</span>
            </div>
            {/* EXACT DESCRIPTION FROM LANDING PAGE CARD */}
            <p className="font-sans text-sm sm:text-base text-[#131914] leading-relaxed">
              {currentHouse.description}
            </p>
          </div>

          {/* EXACT FEATURES FROM LANDING PAGE CARD */}
          <div className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#131914]">
              Core Capabilities & Architecture:
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-[#131914]">
              {currentHouse.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#131914] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IF HOUSE II: SHOW CURRICULUM MODULES (SKILLSPRING SYLLABUS) */}
          {isClassroom && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#131914]">
                  SkillSpring University Syllabus:
                </span>
                <span className="text-[11px] font-mono text-[#656C64]">
                  Levels 1–4 Certification
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {schoolOfLight.pathCertifications.map((cert, cIdx) => (
                  <div 
                    key={cIdx}
                    className="p-3.5 rounded-2xl bg-white border border-[#E8E5DD] space-y-1 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-bold text-xs text-[#131914]">
                        {cert.level}: {cert.name}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#D6E3CE] text-[#131914] font-semibold">
                        Module Track
                      </span>
                    </div>
                    <p className="text-[11px] text-[#656C64] leading-relaxed">
                      {cert.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* IF HOUSE III: SHOW COMMUNITY LIFE (WITHME CIRCLE) */}
          {isCommunity && (
            <div className="p-4 rounded-2xl bg-[#D6E3CE]/40 border border-[#C6D6BD] space-y-2 text-xs">
              <div className="font-sans font-bold text-sm text-[#131914] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#131914]" />
                <span>Private Member Sanctuary (No Algorithm, No Ads)</span>
              </div>
              <p className="text-[#656C64] leading-relaxed">
                School of Light students receive direct invite tokens to the WithMe Sanctuary upon enrollment. Study circles, moon meditations, and direct guidance threads are held here in sanctuary tranquility.
              </p>
            </div>
          )}

          {/* IF HOUSE I: SHOW WIX PLATFORM DETAILS */}
          {isWix && (
            <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] space-y-2 text-xs">
              <div className="font-sans font-bold text-sm text-[#131914] flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#131914]" />
                <span>Zero Developer Lock-In • Native Wix Studio Foundation</span>
              </div>
              <p className="text-[#656C64] leading-relaxed">
                Every section of the public house is mapped 1:1 to horizontal Wix strips, ensuring founder Telu'an Veyar can freely modify texts, photos, bookings, and products without technical friction.
              </p>
            </div>
          )}

          {/* Action Button & Doorway Notice */}
          <div className="pt-2 space-y-3">
            {portalOpened ? (
              <div className="p-4 rounded-2xl bg-[#D6E3CE] text-[#131914] text-xs space-y-1 animate-fadeIn border border-[#C6D6BD]">
                <div className="font-bold font-sans">
                  Founding Year Doorway: October 31, 2026
                </div>
                <p>
                  The {currentHouse.platform} student single-sign-on portal opens on the eve of All Hallows. You can secure your founding seat in The School of Light today.
                </p>
              </div>
            ) : (
              <button
                onClick={() => setPortalOpened(true)}
                className="w-full py-3.5 rounded-full bg-[#131914] hover:bg-[#253026] text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>{currentHouse.actionText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}

            <p className="text-center text-[11px] text-[#656C64]">
              Connected to <strong>ForestTherapeutics.us</strong> via encrypted Stripe and SSO credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
