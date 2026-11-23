import { useState } from 'react';
import { X, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ScholarshipModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('request'); // 'request' or 'donate'
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('The School of Light');
  const [statement, setStatement] = useState('');
  const [donationAmount, setDonationAmount] = useState('50');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E8E5DD] p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close scholarship modal"
          className="absolute top-4 right-4 p-2.5 text-[#131914] bg-[#F7F5F0] hover:bg-[#E8E5DD] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#D6E3CE] text-[#131914] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <h3 className="font-sans text-2xl font-bold text-[#131914]">
              {activeTab === 'request' ? 'Your Request Has Been Received' : 'Deep Gratitude for Your Offering'}
            </h3>

            <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed max-w-sm mx-auto">
              {activeTab === 'request' 
                ? `Telu'an Veyar personally reviews each inquiry with deep confidentiality and reverence. We will be in touch at ${email} within 48 hours.`
                : `Your generous contribution to the Living Root Fund directly enables sincere seekers to study and heal without economic burden.`
              }
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-8 py-3.5 rounded-full bg-[#131914] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#253026] transition-colors"
            >
              Return to Sanctuary
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6E3CE] text-[#131914] text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 text-[#131914] fill-current" />
              <span>The Living Root Sacred Fund</span>
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#131914] mb-1">
              No sincere soul is turned away <span className="font-accent">for want of means.</span>
            </h3>

            {/* Switcher */}
            <div className="flex gap-2 p-1.5 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] my-4 text-xs">
              <button
                onClick={() => setActiveTab('request')}
                className={`flex-1 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'request'
                    ? 'bg-[#131914] text-white shadow-xs'
                    : 'text-[#656C64] hover:text-[#131914]'
                }`}
              >
                Request Tuition Support
              </button>
              <button
                onClick={() => setActiveTab('donate')}
                className={`flex-1 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'donate'
                    ? 'bg-[#131914] text-white shadow-xs'
                    : 'text-[#656C64] hover:text-[#131914]'
                }`}
              >
                Give to the Fund
              </button>
            </div>

            {activeTab === 'request' ? (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-sm text-[#131914] placeholder-[#656C64]/60 focus:outline-hidden focus:border-[#131914]"
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-sm text-[#131914] placeholder-[#656C64]/60 focus:outline-hidden focus:border-[#131914]"
                />

                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-xs text-[#131914] focus:outline-hidden focus:border-[#131914]"
                >
                  <option value="The School of Light">The School of Light (Digital University)</option>
                  <option value="Yellow Envelope Seminary">Yellow Envelope Seminary (Postal School)</option>
                  <option value="SoulMirror Guidance">SoulMirror 1:1 Guidance Suite</option>
                  <option value="Living Earth Immersion">Living Earth Woodland Immersion</option>
                </select>

                <textarea
                  rows={3}
                  required
                  placeholder="Share a quiet reflection on your present financial season and what calls you here..."
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-sm text-[#131914] placeholder-[#656C64]/60 focus:outline-hidden focus:border-[#131914]"
                />

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#131914] hover:bg-[#253026] text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-xs"
                  >
                    Submit Confidential Inquiry
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-[#656C64] leading-relaxed">
                  Your direct offering sponsors full or partial tuition for seekers who cannot meet standard rates.
                </p>

                <div className="grid grid-cols-4 gap-2">
                  {['25', '50', '100', '250'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setDonationAmount(amt)}
                      className={`py-2.5 rounded-xl border font-mono text-xs transition-colors ${
                        donationAmount === amt
                          ? 'bg-[#131914] text-white border-[#131914]'
                          : 'bg-[#F7F5F0] text-[#131914] border-[#E8E5DD] hover:bg-white'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  placeholder="Benefactor Name (or Anonymous)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-sm text-[#131914]"
                />

                <input
                  type="email"
                  required
                  placeholder="Email for Tax Receipt"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-sm text-[#131914]"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#131914] hover:bg-[#253026] text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-xs"
                >
                  Consecrate Offering (${donationAmount})
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#656C64]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Held in private confidence by Telu'an Veyar.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
