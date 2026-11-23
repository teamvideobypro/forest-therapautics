import { useState } from 'react';
import { X, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E8E5DD] p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-4 right-4 p-2.5 text-[#131914] bg-[#F7F5F0] hover:bg-[#E8E5DD] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'confirmed' ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#D6E3CE] text-[#131914] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="font-mono uppercase tracking-widest text-xs text-[#131914] font-bold">
              Sacred Space Reserved
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#131914]">
              Your Soul Call Is Scheduled
            </h3>

            <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] text-xs text-[#131914] space-y-1.5 max-w-sm mx-auto font-mono">
              <div><strong>Time:</strong> {selectedDay} at {selectedTime}</div>
              <div><strong>With:</strong> Telu'an Veyar</div>
              <div><strong>Format:</strong> Zoom Video / Private Phone</div>
            </div>

            <p className="text-xs text-[#656C64] max-w-sm mx-auto leading-relaxed">
              A gentle calendar invitation with your private Zoom connection link has been dispatched to <strong>{email}</strong>. Savor the stillness until we meet.
            </p>

            <button
              onClick={onClose}
              className="mt-4 px-8 py-3.5 rounded-full bg-[#131914] text-white font-medium text-xs tracking-wider uppercase hover:bg-[#253026] transition-colors"
            >
              Return to Sanctuary
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6E3CE] text-[#131914] text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary • 20 Minutes</span>
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#131914] mb-1">
              Free Soul Connection <span className="font-accent">Call.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#656C64] leading-relaxed mb-6">
              A pressure-free, gentle conversation with Telu'an Veyar to discern resonance and find your rightful doorway into the schools or guidance containers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Day & Time Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#131914] font-semibold mb-1">
                    Select a Day
                  </label>
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-xs text-[#131914] focus:outline-hidden focus:border-[#131914]"
                  >
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#131914] font-semibold mb-1">
                    Select a Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-xs text-[#131914] focus:outline-hidden focus:border-[#131914]"
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
                <input
                  type="tel"
                  placeholder="Phone Number (for SMS reminder, optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-sm text-[#131914] placeholder-[#656C64]/60 focus:outline-hidden focus:border-[#131914]"
                />
                <textarea
                  rows={2}
                  placeholder="What question or threshold brings you to the sanctuary? (Optional)"
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E8E5DD] text-sm text-[#131914] placeholder-[#656C64]/60 focus:outline-hidden focus:border-[#131914]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#131914] hover:bg-[#253026] text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-xs"
                >
                  Confirm Free Booking (20 Min)
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#656C64]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Completely pressure-free. Zero sales tactics. Pure reflective presence.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
