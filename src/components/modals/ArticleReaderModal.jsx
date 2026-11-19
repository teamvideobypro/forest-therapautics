import { X, Clock } from 'lucide-react';


export default function ArticleReaderModal({ isOpen, onClose, article }) {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#F6F1E7] border border-[#3B2E26]/20 p-6 sm:p-10 shadow-2xl apothecary-card max-h-[90vh] overflow-y-auto paper-grain">
        <button
          onClick={onClose}
          aria-label="Close article reader"
          className="absolute top-4 right-4 p-2 text-[#3B2E26] hover:bg-[#EFE6D2] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#9A7225]">
            <span className="uppercase font-bold">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F362C] leading-snug">
            {article.title}
          </h2>

          <div className="text-xs font-serif italic text-[#4A6351] pb-4 border-b border-[#3B2E26]/10">
            Written by {article.author} • Forest Therapeutics Archive
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#3B2E26]/90 leading-relaxed font-light">
            <p className="font-medium text-[#1F362C]">
              {article.excerpt}
            </p>
            <p>
              When human consciousness attempts to elevate itself solely through abstract intellectual contemplation, the nervous system remains brittle. The intellect can construct immense cathedrals of theological and metaphysical theory, yet the body remains anxious, hypervigilant, and disconnected from the ground beneath it.
            </p>
            <p>
              This is the heart of what we call <strong>The Second Ascension</strong>. It is not sufficient to merely awaken upward into celestial understanding. That light must be drawn down through the throat, into the heart's coherent field, through the diaphragm, the hips, the soles of the feet, and down into the mycorrhizal root networks of the forest.
            </p>
            <blockquote className="p-4 rounded-xl bg-[#EFE6D2] border-l-4 border-[#C99738] font-serif italic text-base text-[#1F362C] my-6">
              "The trees do not struggle to be sacred. A cedar does not labor to achieve spiritual status. It simply anchors deeply into the stone and reaches quietly for the sun. Your nervous system is designed for the same simplicity."
            </blockquote>
            <p>
              As we prepare for the Founding Year opening on October 31, 2026, our prayer is that every reader who touches these words feels a palpable letting-go in the back of the neck and shoulders. You are home.
            </p>
          </div>

          <div className="pt-6 border-t border-[#3B2E26]/15 flex items-center justify-between">
            <span className="text-xs font-mono text-[#6B5B4E]">
              Published on Substack & Forest Therapeutics Hub
            </span>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#1F362C] text-[#F6F1E7] text-xs font-semibold uppercase tracking-wider"
            >
              Close Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
