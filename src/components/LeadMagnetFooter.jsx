import { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { SANCTUARY_BRAND } from '../data/sanctuaryData';

export default function LeadMagnetFooter({
  onNavigateSection,
  onOpenSoulCall,
  onOpenScholarship,
  stripInspectorActive
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <footer id="footer" className="pt-10 pb-6 px-3 sm:px-6">
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 10 • Pre-Footer Ambient Call & Giant Brand Wordmark
          </span>
        </div>
      )}

      {/* 1. AMBIENT DARK CARD (Matches Reference Section 12: "Your moment of calm") */}
      <div className="max-w-7xl mx-auto mb-6 reveal-on-scroll">
        <div className="rounded-3xl bg-[#131914] text-white p-12 sm:p-20 text-center relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,227,206,0.12)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#D6E3CE]">
              Continuous Sovereignty
            </span>

            <h3 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Your moment of <span className="font-accent-light">remembering.</span>
            </h3>

            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
              Where nature, presence, and the awakened heart restore what modern living has quieted.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenSoulCall}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-white/90 text-[#131914] font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm hover-lift"
              >
                Book Free Soul Connection Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTAINER WITH GIANT WORDMARK */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#131914] text-white p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl space-y-16 reveal-on-scroll">
        {/* Top Split: Newsletter "A gentle note in your inbox" */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2 max-w-md">
            <h4 className="font-sans text-2xl font-semibold tracking-tight text-white">
              A gentle note in <span className="font-accent-light">your inbox.</span>
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Receive <strong className="text-white font-medium">What Is Eco-Christed Living</strong>: A quiet, three-lesson email introduction to the Two Ascensions and nervous system coherence.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            {submitted ? (
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-white flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D6E3CE] shrink-0" />
                <span>Lesson One is departing for {email}. Savor this quiet transmission.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your sacred email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/50 text-xs focus:outline-hidden focus:border-white/40 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-white hover:bg-white/90 text-[#131914] font-medium text-xs tracking-wide shrink-0 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
            {error && <p className="text-xs text-rose-300 mt-1">{error}</p>}
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-white/70">
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
              Schools & Courses
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateSection('schools')} className="hover:text-white transition-colors">
                  The School of Light
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('schools')} className="hover:text-white transition-colors">
                  Yellow Envelope Seminary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('schools')} className="hover:text-white transition-colors">
                  The Sovereign Signal Framework
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('schools')} className="hover:text-white transition-colors">
                  The Living Signal Series
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('three-houses')} className="text-[#D6E3CE] hover:underline">
                  SkillSpring Classroom ↗
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
              1:1 Guidance & Shop
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateSection('offerings')} className="hover:text-white transition-colors">
                  Living Earth Immersion ($1,111)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('offerings')} className="hover:text-white transition-colors">
                  SoulMirror Guidance Suite
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('apothecary')} className="hover:text-white transition-colors">
                  Handmade by Telu'an Veyar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('apothecary')} className="hover:text-white transition-colors">
                  Apothecary & Ritual Supplies
                </button>
              </li>
              <li>
                <button onClick={onOpenScholarship} className="text-[#D6E3CE] hover:underline">
                  Living Root Scholarship
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
              Broadcast Media
            </div>
            <ul className="space-y-2">
              <li>Roku TV (Channel 436)</li>
              <li>Amazon Fire TV (Channel 436)</li>
              <li>YouTube Broadcasts</li>
              <li>Substack Circle ($0 / $7)</li>
              <li>WithMe Member Sanctuary</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
              Direct Contact
            </div>
            <div className="space-y-1.5 font-mono text-[11px]">
              <div>{SANCTUARY_BRAND.phone}</div>
              <div className="truncate">{SANCTUARY_BRAND.emailGeneral}</div>
              <div className="text-white/50">Woodland Immersions by Appt.</div>
            </div>
            <div className="pt-1">
              <button
                onClick={onOpenSoulCall}
                className="px-4 py-1.5 rounded-full border border-white/20 text-white hover:bg-white/10 text-[10px] uppercase font-mono tracking-wider"
              >
                Schedule Free Call
              </button>
            </div>
          </div>
        </div>

        {/* GIANT ARCHITECTURAL WORDMARK (Exactly like WELLGES in the reference) */}
        <div className="pt-6 border-t border-white/10">
          <div className="font-sans font-bold text-[clamp(2.5rem,10.5vw,9rem)] leading-none tracking-tighter text-white/95 select-none text-center sm:text-left">
            FOREST THERAPEUTICS
          </div>
        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 border-t border-white/10">
          <div>
            © 2026 Forest Therapeutics LLC • Founded by Telu'an Veyar • All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Student Agreements</span>
            <span>•</span>
            <span className="text-[#D6E3CE] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Stripe Secure Payments</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
