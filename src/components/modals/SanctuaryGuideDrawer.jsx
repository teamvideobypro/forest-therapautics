import { useState, useRef, useEffect } from 'react';
import { X, Bot, Send, TreePine } from 'lucide-react';

export default function SanctuaryGuideDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Peace and welcome to the Sanctuary Knowledge Guide. I am an AI reflection trained directly on the teachings of Telu'an Veyar, Eco-Christed Living, and the architecture of our Three Houses. How may I witness or orient your journey today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const promptChips = [
    "What is Eco-Christed Living?",
    "How do Wix, SkillSpring & WithMe connect?",
    "How does Yellow Envelope Seminary work?",
    "What is SoulMirror Guidance?",
    "Tell me about the Living Root Scholarship"
  ];

  const handleSend = (text) => {
    const query = text || input;
    if (!query.trim()) return;

    const userMsg = { role: 'user', content: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();

      if (lower.includes('eco-christed') || lower.includes('philosophy') || lower.includes('ascension')) {
        reply = "Eco-Christed Living is an original civilizational and cultural framework originating through Telu'an Veyar. It is not an institutional religion. 'Christed' refers to the unfallen, luminous coherence of the awakened heart in direct communion with Divine Source, while 'Eco' honors the living intelligence of soil, seasons, and ancient forests. It harmonizes the Two Ascensions: reaching upward into transcendent light (First Ascension) while rooting downward into the living Earth (Second Ascension).";
      } else if (lower.includes('three houses') || lower.includes('wix') || lower.includes('skillspring') || lower.includes('withme')) {
        reply = "The sanctuary is organized as Three Connected Houses: \n\n1. Forest Therapeutics (Wix Editor) is the Public House—housing our front door, public archive, 1:1 bookings, Stripe-powered apothecary store, and media center.\n2. The Classroom (SkillSpring) is our dedicated digital university portal for structured course progression and PATH certifications.\n3. The Inner Circle (WithMe) is our private, ad-free sovereign member community for live video broadcasts, prayer threads, and study circles.";
      } else if (lower.includes('yellow envelope') || lower.includes('mail') || lower.includes('postal')) {
        reply = "Yellow Envelope Seminary is our 4-year correspondence mystery school delivered physically to your mailbox. Each month, a heavy goldenrod envelope arrives with 20 pages printed on tactile Earth Yellow paper, vintage woodcut artwork, hand-tied botanical allies, and resins. It is strictly pay-per-lesson ($30 first lesson, $25/lesson regular, $55 ceremonial box) with no locked contracts.";
      } else if (lower.includes('soulmirror') || lower.includes('immersion') || lower.includes('guidance')) {
        reply = "SoulMirror is our 1:1 sacred reflective container held online via Zoom or in-person. Unlike conventional therapy, we do not view you as broken or needing repair; unlike life coaching, we do not push goal-driven performance. SoulMirror acts as an unclouded mirror reflecting your inherent coherence. Sessions range from $296 (60 min) to $1,776 (6-session embodiment arc), or the 3.5-hour in-person Living Earth Remembrance Immersion ($1,111).";
      } else if (lower.includes('scholarship') || lower.includes('living root') || lower.includes('financial') || lower.includes('afford')) {
        reply = "The Living Root Scholarship embodies our sacred principle: 'No sincere soul is ever turned away for want of means.' Sincere seekers in tighter financial seasons can request tuition assistance or scholarship seats by emailing scholarship@foresttherapeutics.us. Telu'an reviews each note with warmth, confidentiality, and zero invasive financial auditing.";
      } else if (lower.includes('telu\'an') || lower.includes('founder') || lower.includes('who is')) {
        reply = "Telu'an Veyar is the founder of Forest Therapeutics LLC, The School of Light, and Yellow Envelope Seminary. He has devoted over 30 years to nature-based communion and spiritual witnessing, synthesizing the Eco-Christed Living cosmology in 2024. He hosts 'A Circle of Light' on Roku TV and Amazon Fire TV Channel 436.";
      } else {
        reply = `Thank you for bringing your question to the sanctuary. In the words of Telu'an Veyar, 'You are not broken; you are remembering.' For detailed inquiries or personal guidance, you are warmly invited to book a complimentary 20-minute Free Soul Connection Call or write directly to connect@foresttherapeutics.us.`;
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      <div onClick={onClose} className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F6F1E7] border-l border-[#3B2E26]/20 shadow-2xl flex flex-col justify-between paper-grain">
          {/* Header */}
          <div className="p-5 border-b border-[#3B2E26]/10 flex items-center justify-between bg-[#EFE6D2]/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1F362C] text-[#C99738] flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-[#1F362C] leading-none">
                  Sanctuary Guide AI
                </h2>
                <span className="text-[10px] font-mono text-[#4A6351]">
                  Grounded Knowledge Catalog
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#EFE6D2] text-[#3B2E26]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#1F362C] text-[#C99738] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    <TreePine className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] whitespace-pre-line ${
                    m.role === 'user'
                      ? 'bg-[#1F362C] text-[#F6F1E7] rounded-tr-none'
                      : 'bg-[#EFE6D2] text-[#3B2E26] border border-[#3B2E26]/10 rounded-tl-none font-sans'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-xs text-[#6B5B4E] italic">
                <div className="w-7 h-7 rounded-full bg-[#1F362C] text-[#C99738] flex items-center justify-center shrink-0">
                  <TreePine className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <span>Listening to sanctuary records...</span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-3 bg-[#EFE6D2]/60 border-t border-[#3B2E26]/10 overflow-x-auto flex gap-1.5 text-[11px] whitespace-nowrap">
            {promptChips.map((chip, cIdx) => (
              <button
                key={cIdx}
                onClick={() => handleSend(chip)}
                className="px-2.5 py-1 rounded-full bg-white/70 hover:bg-white text-[#1F362C] border border-[#3B2E26]/15 transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-[#F6F1E7] border-t border-[#3B2E26]/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask about our teachings, schools, or founder..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full bg-[#EFE6D2] border border-[#3B2E26]/20 text-xs text-[#3B2E26] focus:outline-hidden focus:border-[#C99738]"
              />
              <button
                type="submit"
                aria-label="Send query"
                className="w-10 h-10 rounded-full bg-[#1F362C] text-[#C99738] flex items-center justify-center shrink-0 hover:bg-[#162820] transition-colors"
              >
                <Send className="w-4 h-4 translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
