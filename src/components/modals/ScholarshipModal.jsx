import { useState } from 'react';
import { X, Heart, CheckCircle2 } from 'lucide-react';


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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#F6F1E7] border-2 border-[#C99738]/50 p-6 sm:p-8 shadow-2xl apothecary-card max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close scholarship modal"
          className="absolute top-4 right-4 p-2 text-[#3B2E26] hover:bg-[#EFE6D2] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#1F362C] text-[#C99738] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1F362C]">
              {activeTab === 'request' ? 'Your Request Has Been Received' : 'Deep Gratitude for Your Offering'}
            </h3>

            <p className="text-xs text-[#6B5B4E] leading-relaxed max-w-sm mx-auto">
              {activeTab === 'request' 
                ? `Telu'an Veyar personally reviews each inquiry with deep confidentiality and reverence. We will be in touch at ${email} within 48 hours.`
                : `Your tax-deductible contribution to the Living Root Fund directly enables sincere seekers to study and heal without economic burden.`
              }
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#1F362C] text-[#F6F1E7] text-xs font-semibold uppercase tracking-wider"
            >
              Return to Sanctuary
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C99738]/20 text-[#9A7225] text-[10px] font-display uppercase tracking-widest font-semibold mb-3">
              <Heart className="w-3.5 h-3.5 text-[#C99738] fill-current" />
              <span>The Living Root Fund</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1F362C] mb-1">
              "No sincere soul is ever turned away."
            </h3>

            {/* Switcher */}
            <div className="flex gap-2 p-1 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/10 my-4 text-xs">
              <button
                onClick={() => setActiveTab('request')}
                className={`flex-1 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'request'
                    ? 'bg-[#1F362C] text-[#F6F1E7] font-semibold'
                    : 'text-[#6B5B4E] hover:text-[#1F362C]'
                }`}
              >
                Request Support
              </button>
              <button
                onClick={() => setActiveTab('donate')}
                className={`flex-1 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'donate'
                    ? 'bg-[#1F362C] text-[#F6F1E7] font-semibold'
                    : 'text-[#6B5B4E] hover:text-[#1F362C]'
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
                  className="w-full px-4 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-xs text-[#3B2E26] focus:outline-hidden focus:border-[#C99738]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-xs text-[#3B2E26] focus:outline-hidden focus:border-[#C99738]"
                />
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-xs text-[#1F362C]"
                >
                  <option value="The School of Light">The School of Light (Digital University)</option>
                  <option value="Yellow Envelope Seminary">Yellow Envelope Seminary (By Mail)</option>
                  <option value="SoulMirror Guidance">SoulMirror Guidance Session</option>
                  <option value="General Sanctuary Needs">General Sanctuary Fellowship</option>
                </select>
                <textarea
                  rows={3}
                  required
                  placeholder="Share a few words on what draws you to this path and what level of assistance would sustain you..."
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-xs text-[#3B2E26] focus:outline-hidden focus:border-[#C99738]"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#1F362C] hover:bg-[#162820] text-[#F6F1E7] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  Submit Confidential Request
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-[#6B5B4E] leading-relaxed">
                  Every dollar donated to the Living Root Fund goes 100% directly toward subsidizing postal grimoires and tuition for dedicated students.
                </p>

                <div className="grid grid-cols-4 gap-2">
                  {['25', '50', '100', '250'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setDonationAmount(amt)}
                      className={`py-2 rounded-lg border text-xs font-mono font-bold transition-colors ${
                        donationAmount === amt
                          ? 'bg-[#1F362C] text-[#F6F1E7] border-[#C99738]'
                          : 'bg-[#EFE6D2] text-[#3B2E26] border-[#3B2E26]/20'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <input
                  type="email"
                  required
                  placeholder="Your Email for Stripe Tax Receipt"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-xs text-[#3B2E26]"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#C99738] hover:bg-[#B38226] text-[#1F362C] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  Give ${donationAmount} to the Living Root Fund
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
