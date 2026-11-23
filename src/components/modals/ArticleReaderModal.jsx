import { X, Clock, BookOpen } from 'lucide-react';

export default function ArticleReaderModal({ isOpen, onClose, article }) {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#E8E5DD] shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close article reader"
          className="absolute top-4 right-4 z-20 p-2.5 text-[#131914] bg-white/80 hover:bg-white rounded-full shadow-md backdrop-blur-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Photographic Header if available */}
        {article.image && (
          <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0 bg-[#131914]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#D6E3CE] text-[#131914]">
                {article.category}
              </span>
            </div>
          </div>
        )}

        {/* Main Article Content */}
        <div className="p-6 sm:p-10 space-y-5 flex-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#656C64]">
            <span className="uppercase font-bold text-[#131914]">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#131914] leading-snug">
            {article.title}
          </h2>

          <div className="text-xs font-mono text-[#656C64] pb-4 border-b border-[#E8E5DD]">
            Authored by <strong className="text-[#131914]">{article.author}</strong> • Forest Therapeutics Archive
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#131914] leading-relaxed">
            <p className="font-medium text-base text-[#131914] leading-relaxed">
              {article.excerpt}
            </p>
            <p className="text-[#656C64]">
              When human consciousness attempts to elevate itself solely through abstract intellectual contemplation, the nervous system remains brittle. The intellect can construct immense cathedrals of theological and metaphysical theory, yet the body remains anxious, hypervigilant, and disconnected from the ground beneath it.
            </p>
            <p className="text-[#656C64]">
              This is the heart of what we call <strong>The Second Ascension</strong>. It is not sufficient to merely awaken upward into celestial understanding. That light must be drawn down through the throat, into the heart's coherent field, through the diaphragm, the hips, the soles of the feet, and down into the mycorrhizal root networks of the forest.
            </p>
            <blockquote className="p-5 rounded-2xl bg-[#F7F5F0] border-l-4 border-[#131914] font-sans text-sm sm:text-base text-[#131914] my-6 italic">
              "The trees do not struggle to be sacred. A cedar does not labor to achieve spiritual status. It simply anchors deeply into the stone and reaches quietly for the sun. Your nervous system is designed for the same simplicity."
            </blockquote>
            <p className="text-[#656C64]">
              As we prepare for the Founding Year opening on October 31, 2026, our prayer is that every reader who touches these words feels a palpable letting-go in the back of the neck and shoulders. You are home.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E8E5DD] flex items-center justify-between text-xs font-mono text-[#656C64]">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Published on Substack & Forest Therapeutics Hub</span>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#131914] text-white hover:bg-[#253026] text-xs font-sans uppercase tracking-wider transition-colors"
            >
              Close Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
