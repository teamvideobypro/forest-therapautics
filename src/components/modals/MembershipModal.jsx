import { useState } from 'react';
import { X, CheckCircle2, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { SCHOOLS_DATA } from '../../data/sanctuaryData';

export default function MembershipModal({ 
  isOpen, 
  onClose, 
  initialTier = 'second-ascension',
  onOpenSoulCall,
  onOpenScholarship 
}) {
  const { schoolOfLight } = SCHOOLS_DATA;
  
  // Map tier names or indices
  const getInitialIndex = () => {
    if (typeof initialTier === 'number') return initialTier;
    if (initialTier === 'first-light') return 0;
    if (initialTier === 'all-access') return 3; // index 3 in tiers
    if (initialTier === 'first-ascension') return 1;
    return 2; // Second Ascension default (index 2)
  };

  const [selectedIdx, setSelectedIdx] = useState(getInitialIndex());
  const [enrolled, setEnrolled] = useState(false);

  if (!isOpen) return null;

  // Available tiers in the membership grid: First Light (0), Second Ascension (2), All Access (3)
  const displayTiers = [
    { ...schoolOfLight.tiers[0], key: 'first-light', badge: 'Seeker Doorway' },
    { ...schoolOfLight.tiers[2], key: 'second-ascension', badge: 'Most Popular' },
    { ...schoolOfLight.tiers[3], key: 'all-access', badge: 'Guidance & Mastery' }
  ];

  const currentTier = displayTiers.find((_, i) => i === selectedIdx) || displayTiers[1];

  const handleEnroll = () => {
    setEnrolled(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#E8E5DD] shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close membership modal"
          className="absolute top-4 right-4 z-20 p-2.5 text-[#131914] bg-white/80 hover:bg-white rounded-full shadow-md backdrop-blur-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-[#E8E5DD] bg-[#F7F5F0]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#131914]" />
            <span>The School of Light • Founding Year Oct 31, 2026</span>
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#131914]">
            University Membership <span className="font-accent">Sanctuary.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#656C64] mt-1">
            Zero contracts. Cancel or pause anytime with one click. 100% matched to our curriculum.
          </p>

          {/* 3 Tiers Tab Switcher */}
          <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-white border border-[#E8E5DD] shadow-xs mt-5">
            {displayTiers.map((tier, idx) => (
              <button
                key={tier.name}
                onClick={() => {
                  setSelectedIdx(idx);
                  setEnrolled(false);
                }}
                className={`py-2 px-2 sm:px-4 rounded-xl text-xs font-medium transition-all text-center flex flex-col items-center gap-0.5 ${
                  selectedIdx === idx
                    ? 'bg-[#131914] text-white shadow-xs'
                    : 'text-[#656C64] hover:text-[#131914] hover:bg-[#F7F5F0]'
                }`}
              >
                <span className="font-bold truncate max-w-full">{tier.name}</span>
                <span className={`text-[10px] font-mono ${selectedIdx === idx ? 'text-[#D6E3CE]' : 'text-[#656C64]'}`}>
                  {tier.price}{tier.period === 'Free Offering' ? ' Free' : '/mo'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tier Details Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {enrolled ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#D6E3CE] text-[#131914] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="font-mono uppercase tracking-widest text-xs text-[#131914] font-bold">
                Founding Seat Held
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#131914]">
                Welcome to {currentTier.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#656C64] max-w-md mx-auto leading-relaxed">
                Your founding enrollment request for <strong>{currentTier.name} ({currentTier.price} {currentTier.period})</strong> has been registered. You will receive your orientation parcel and WithMe portal access ahead of our Founding Year opening on October 31, 2026.
              </p>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-[#131914] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#253026] transition-colors"
                >
                  Return to Sanctuary
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header of Selected Tier */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E5DD]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-[#131914]">
                      {currentTier.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#D6E3CE] text-[#131914]">
                      {currentTier.badge}
                    </span>
                  </div>
                  {/* EXACT DESCRIPTION FROM LANDING PAGE CARD */}
                  <p className="text-xs sm:text-sm text-[#656C64] mt-1.5 leading-relaxed">
                    {currentTier.description}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="font-sans text-3xl sm:text-4xl font-bold text-[#131914]">
                    {currentTier.price}
                  </div>
                  <div className="text-xs text-[#656C64] font-mono">
                    {currentTier.period === 'Free Offering' ? 'Complimentary Seeker Tier' : 'per month • auto-renews'}
                  </div>
                </div>
              </div>

              {/* EXACT INCLUDED BULLETS FROM LANDING PAGE CARD */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#131914]">
                  What Is Included in {currentTier.name}:
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#131914]">
                  {currentTier.includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD]">
                      <CheckCircle2 className="w-4 h-4 text-[#131914] shrink-0 mt-0.5" />
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Living Root Fund Notice */}
              <div className="p-4 rounded-2xl bg-[#D6E3CE]/30 border border-[#C6D6BD] flex items-start gap-3 text-xs text-[#131914]">
                <Heart className="w-4 h-4 text-[#131914] shrink-0 mt-0.5 fill-current" />
                <div className="space-y-1">
                  <span className="font-semibold">Living Root Scholarship Commitment</span>
                  <p className="text-[#656C64] text-[11px] leading-relaxed">
                    No sincere soul is ever turned away for want of means. If you are in a tighter financial season, you can request tuition assistance with full dignity.
                  </p>
                  {onOpenScholarship && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenScholarship();
                      }}
                      className="text-[11px] font-semibold text-[#131914] underline underline-offset-2 hover:text-black"
                    >
                      Request Scholarship Support ↗
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={handleEnroll}
                  className="w-full py-4 rounded-full bg-[#131914] hover:bg-[#253026] text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  {currentTier.price === '$0' ? 'Begin Free with First Light' : `Enroll in ${currentTier.name} (${currentTier.price}/mo)`}
                </button>

                {onOpenSoulCall && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenSoulCall();
                    }}
                    className="w-full py-2.5 rounded-full border border-[#E8E5DD] hover:bg-[#F7F5F0] text-[#131914] text-xs font-medium transition-colors"
                  >
                    Unsure which tier fits? Schedule a Free Soul Call
                  </button>
                )}

                <div className="flex items-center justify-center gap-4 text-[11px] text-[#656C64]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Encrypted Stripe Checkout</span>
                  </span>
                  <span>•</span>
                  <span>Zero Lock-in Contract</span>
                  <span>•</span>
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
