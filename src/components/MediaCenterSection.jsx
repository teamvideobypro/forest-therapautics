import { 
  Play, 
  ArrowRight
} from 'lucide-react';
import { MEDIA_DATA } from '../data/sanctuaryData';


export default function MediaCenterSection({
  onOpenArticle,
  onPlayEpisode,
  stripInspectorActive
}) {
  const { broadcastCard, recentHubArticles } = MEDIA_DATA;

  return (
    <section 
      id="media"
      className="py-10 sm:py-14"
    >
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 07 • 3 Editorial Notes Cards & Broadcast TV
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Header (Matches Reference Section 10: "Notes for everyday living") */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 reveal-on-scroll">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
              <span>Transmissions & Teachings</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#131914]">
              Notes for <span className="font-accent">conscious living.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-[#656C64]">
            Roku & Fire TV Channel 436 • YouTube • Substack
          </div>
        </div>

        {/* 3 Editorial Cards Grid from Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Broadcast Video Card */}
          <div
            onClick={() => onPlayEpisode(broadcastCard.videoPreview)}
            className="rounded-3xl bg-white border border-[#E8E5DD] overflow-hidden p-4 flex flex-col justify-between hover-lift shadow-xs cursor-pointer group reveal-on-scroll stagger-1"
          >
            <div>
              <div className="relative rounded-2xl overflow-hidden h-52 mb-4 bg-[#131914]">
                <img
                  src={broadcastCard.videoPreview.thumbnail}
                  alt={broadcastCard.videoPreview.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#131914] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#131914]/80 text-white">
                  Roku TV Ch 436
                </span>
              </div>

              <div className="text-[10px] font-mono uppercase text-[#656C64] mb-1.5">
                Episode Transmission • 48:15
              </div>
              <h3 className="font-sans font-semibold text-lg text-[#131914] mb-2 group-hover:text-[#656C64] transition-colors line-clamp-2">
                {broadcastCard.videoPreview.title}
              </h3>
            </div>

            <div className="pt-3 border-t border-[#E8E5DD] flex items-center justify-between text-xs font-semibold text-[#131914]">
              <span>Watch Transmission</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Article 1 (The Golden Thread Principle) */}
          <div
            onClick={() => onOpenArticle(recentHubArticles[0])}
            className="rounded-3xl bg-white border border-[#E8E5DD] overflow-hidden p-4 flex flex-col justify-between hover-lift shadow-xs cursor-pointer group reveal-on-scroll stagger-2"
          >
            <div>
              <div className="relative rounded-2xl overflow-hidden h-52 mb-4 bg-[#F7F5F0]">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                  alt={recentHubArticles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/90 text-[#131914]">
                  {recentHubArticles[0].category}
                </span>
              </div>

              <div className="text-[10px] font-mono uppercase text-[#656C64] mb-1.5 flex items-center gap-2">
                <span>{recentHubArticles[0].date}</span>
                <span>•</span>
                <span>{recentHubArticles[0].readTime}</span>
              </div>
              <h3 className="font-sans font-semibold text-lg text-[#131914] mb-2 group-hover:text-[#656C64] transition-colors line-clamp-2">
                {recentHubArticles[0].title}
              </h3>
              <p className="text-xs text-[#656C64] line-clamp-2 leading-relaxed">
                {recentHubArticles[0].excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E8E5DD] flex items-center justify-between text-xs font-semibold text-[#131914]">
              <span>Read Essay</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Article 2 (The Second Ascension) */}
          <div
            onClick={() => onOpenArticle(recentHubArticles[1])}
            className="rounded-3xl bg-white border border-[#E8E5DD] overflow-hidden p-4 flex flex-col justify-between hover-lift shadow-xs cursor-pointer group reveal-on-scroll stagger-3"
          >
            <div>
              <div className="relative rounded-2xl overflow-hidden h-52 mb-4 bg-[#F7F5F0]">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                  alt={recentHubArticles[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/90 text-[#131914]">
                  {recentHubArticles[1].category}
                </span>
              </div>

              <div className="text-[10px] font-mono uppercase text-[#656C64] mb-1.5 flex items-center gap-2">
                <span>{recentHubArticles[1].date}</span>
                <span>•</span>
                <span>{recentHubArticles[1].readTime}</span>
              </div>
              <h3 className="font-sans font-semibold text-lg text-[#131914] mb-2 group-hover:text-[#656C64] transition-colors line-clamp-2">
                {recentHubArticles[1].title}
              </h3>
              <p className="text-xs text-[#656C64] line-clamp-2 leading-relaxed">
                {recentHubArticles[1].excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E8E5DD] flex items-center justify-between text-xs font-semibold text-[#131914]">
              <span>Read Essay</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
