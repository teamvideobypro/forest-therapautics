import { useState } from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

export default function SoulCallModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' or 'confirmed'
  const [selectedDay, setSelectedDay] = useState('Tuesday, Dec 1');
  const [selectedTime, setSelectedTime] = useState('2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [intention, setIntention] = useState('');

  if (!isOpen) return null;

  const days = ['Tuesday, Dec 1', 'Thursday, Dec 3', 'Tuesday, Dec 8', 'Thursday, Dec 10'];
  const times = ['11:00 AM EST', '2:00 PM EST', '4:30 PM EST', '7:00 PM EST'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#F6F1E7] border-2 border-[#C99738]/50 p-6 sm:p-8 shadow-2xl apothecary-card max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-4 right-4 p-2 text-[#3B2E26] hover:bg-[#EFE6D2] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'confirmed' ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#1F362C] text-[#C99738] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 stroke-[2]" />
            </div>

            <div className="font-display uppercase tracking-widest text-xs text-[#9A7225] font-semibold">
              Sacred Space Reserved
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#1F362C]">
              Your Soul Call Is Scheduled
            </h3>

            <div className="p-4 rounded-xl bg-[#EFE6D2] border border-[#3B2E26]/10 text-xs text-[#3B2E26] space-y-1 max-w-sm mx-auto font-mono">
              <div><strong>Time:</strong> {selectedDay} at {selectedTime}</div>
              <div><strong>With:</strong> Telu'an Veyar</div>
              <div><strong>Format:</strong> Zoom Video / Private Phone</div>
            </div>

            <p className="text-xs text-[#6B5B4E] max-w-sm mx-auto leading-relaxed">
              A gentle calendar invitation with your private Zoom connection link has been dispatched to <strong>{email}</strong>. Savor the stillness until we meet.
            </p>

            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 rounded-full bg-[#1F362C] text-[#F6F1E7] font-semibold text-xs tracking-wider uppercase"
            >
              Return to Sanctuary
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C99738]/20 border border-[#C99738]/40 text-[#9A7225] text-[10px] font-display uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary • 20 Minutes</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F362C] mb-1">
              Free Soul Connection Call
            </h3>
            <p className="text-xs text-[#6B5B4E] leading-relaxed mb-6">
              A pressure-free, gentle conversation with Telu'an Veyar to discern resonance and find your rightful doorway into the schools or guidance containers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Day & Time Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-display uppercase tracking-wider text-[#1F362C] font-semibold mb-1">
                    Select a Day
                  </label>
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-xs text-[#1F362C]"
                  >
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-display uppercase tracking-wider text-[#1F362C] font-semibold mb-1">
                    Select a Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-xs text-[#1F362C]"
                  >
                    {times.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Name & Email */}
              <div className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-sm text-[#3B2E26] placeholder-[#6B5B4E]/60 focus:outline-hidden focus:border-[#C99738]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-sm text-[#3B2E26] placeholder-[#6B5B4E]/60 focus:outline-hidden focus:border-[#C99738]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (for SMS reminder, optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-sm text-[#3B2E26] placeholder-[#6B5B4E]/60 focus:outline-hidden focus:border-[#C99738]"
                />
                <textarea
                  rows={2}
                  placeholder="What question or threshold brings you to the sanctuary? (Optional)"
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#EFE6D2] border border-[#3B2E26]/20 text-sm text-[#3B2E26] placeholder-[#6B5B4E]/60 focus:outline-hidden focus:border-[#C99738]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1F362C] hover:bg-[#162820] text-[#F6F1E7] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  Confirm Free Booking (20 Min)
                </button>
              </div>

              <p className="text-[10px] text-center text-[#6B5B4E] italic">
                * Completely pressure-free. Zero sales tactics. Pure reflective presence.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
