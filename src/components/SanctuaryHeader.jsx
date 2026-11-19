import { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

export default function SanctuaryHeader({
  onOpenSoulCall,
  onOpenCart,
  cartCount = 0,
  onOpenSearch,
  onNavigateSection
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavClick = (sectionId) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full px-3 sm:px-6 py-3 transition-all pointer-events-none">
      <div className="max-w-7xl mx-auto h-16 sm:h-18 px-4 sm:px-6 flex items-center justify-between gap-4 rounded-full bg-white/85 backdrop-blur-md border border-[#E8E5DD] shadow-xs pointer-events-auto">
        {/* Left: Brand Identity */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
        >
          {/* Botanical Emblem */}
          <div className="w-9 h-9 rounded-full bg-[#131914] flex items-center justify-center text-[#D6E3CE] shadow-xs group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 40 40" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.7">
              <circle cx="20" cy="20" r="17" stroke="rgba(214,227,206,0.3)" />
              <path d="M20 7 C14 14 14 26 20 33 C26 26 26 14 20 7 Z" fill="rgba(214,227,206,0.2)" stroke="#D6E3CE" />
              <line x1="20" y1="11" x2="20" y2="29" stroke="#D6E3CE" />
              <circle cx="20" cy="20" r="2.2" fill="#F7F5F0" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-sans font-semibold tracking-tight text-sm sm:text-base leading-tight text-[#131914]">
              Forest Therapeutics
            </span>
            <span className="tracking-[0.16em] text-[9px] text-[#656C64] uppercase font-medium">
              Eco-Christed Living
            </span>
          </div>
        </div>

        {/* Center: 7 Calm Pathways (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* 1. Home */}
          <button
            onClick={() => handleNavClick('hero')}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#131914] hover:bg-[#F2EFE8] transition-colors"
          >
            Home
          </button>

          {/* 2. Schools & Courses (Dropdown) */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('schools')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('schools')}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#131914] hover:bg-[#F2EFE8] transition-colors"
            >
              <span>Schools & Courses</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>

            {activeDropdown === 'schools' && (
              <div className="absolute top-full left-0 w-80 p-3 bg-white border border-[#E8E5DD] rounded-2xl shadow-xl z-50 animate-fadeIn mt-2">
                <div className="space-y-1">
                  <div 
                    onClick={() => handleNavClick('schools')}
                    className="p-3 rounded-xl hover:bg-[#F7F5F0] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-[#131914]">The School of Light</span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#131914]/8 text-[#131914] font-semibold">University</span>
                    </div>
                    <p className="text-[11px] text-[#656C64] mt-1 leading-relaxed">Digital campus, live sessions & 4-tier PATH Certification.</p>
                  </div>

                  <div 
                    onClick={() => handleNavClick('schools')}
                    className="p-3 rounded-xl hover:bg-[#F7F5F0] cursor-pointer transition-colors border-l-2 border-[#D6E3CE]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-[#131914]">Yellow Envelope Seminary</span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#D6E3CE] text-[#131914] font-semibold">By Mail</span>
                    </div>
                    <p className="text-[11px] text-[#656C64] mt-1 leading-relaxed">4-year correspondence mystery school printed on Earth Yellow paper.</p>
                  </div>

                  <div className="pt-2 border-t border-[#E8E5DD] flex flex-col gap-1 text-[11px]">
                    <button 
                      onClick={() => handleNavClick('schools')}
                      className="text-left px-2 py-1 text-[#656C64] hover:text-[#131914] font-medium"
                    >
                      • The Sovereign Signal Framework (AI as Sacred Mirror)
                    </button>
                    <button 
                      onClick={() => handleNavClick('schools')}
                      className="text-left px-2 py-1 text-[#656C64] hover:text-[#131914] font-medium"
                    >
                      • Thirteen Moons of Remembrance (Living Tarot)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Offerings & Bookings */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('offerings')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('offerings')}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#131914] hover:bg-[#F2EFE8] transition-colors"
            >
              <span>Offerings & Bookings</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>

            {activeDropdown === 'offerings' && (
              <div className="absolute top-full left-0 w-72 p-3 bg-white border border-[#E8E5DD] rounded-2xl shadow-xl z-50 animate-fadeIn mt-2">
                <div className="space-y-1 text-xs">
                  <div 
                    onClick={() => handleNavClick('offerings')}
                    className="p-2.5 rounded-xl hover:bg-[#F7F5F0] cursor-pointer"
                  >
                    <div className="font-semibold text-[#131914] text-xs">Living Earth Immersion</div>
                    <p className="text-[11px] text-[#656C64] mt-0.5">3.5-hr in-person woodland alignment ($1,111)</p>
                  </div>
                  <div 
                    onClick={() => handleNavClick('offerings')}
                    className="p-2.5 rounded-xl hover:bg-[#F7F5F0] cursor-pointer"
                  >
                    <div className="font-semibold text-[#131914] text-xs">SoulMirror Guidance Suite</div>
                    <p className="text-[11px] text-[#656C64] mt-0.5">1:1 reflective containers online or in-person ($296–$1,776)</p>
                  </div>
                  <div 
                    onClick={onOpenSoulCall}
                    className="p-2.5 rounded-xl bg-[#D6E3CE]/40 text-[#131914] cursor-pointer font-medium hover:bg-[#D6E3CE]/70"
                  >
                    ✨ Free Soul Connection Call (20 Min)
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Apothecary & Shop */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('shop')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('apothecary')}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#131914] hover:bg-[#F2EFE8] transition-colors"
            >
              <span>Apothecary</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>

            {activeDropdown === 'shop' && (
              <div className="absolute top-full left-0 w-72 p-3 bg-white border border-[#E8E5DD] rounded-2xl shadow-xl z-50 animate-fadeIn mt-2">
                <div className="space-y-1 text-xs">
                  <div 
                    onClick={() => handleNavClick('apothecary')}
                    className="p-2.5 rounded-xl hover:bg-[#F7F5F0] cursor-pointer"
                  >
                    <span className="font-semibold text-[#131914] text-xs block">Handmade by Telu'an Veyar</span>
                    <span className="text-[11px] text-[#656C64]">Small-batch consecrated oils & talismans</span>
                  </div>
                  <div 
                    onClick={() => handleNavClick('apothecary')}
                    className="p-2.5 rounded-xl hover:bg-[#F7F5F0] cursor-pointer"
                  >
                    <span className="font-semibold text-[#131914] text-xs block">Apothecary & Ritual Supplies</span>
                    <span className="text-[11px] text-[#656C64]">Wildcrafted herbs, censers & brassware</span>
                  </div>
                  <div 
                    onClick={() => handleNavClick('apothecary')}
                    className="p-2.5 rounded-xl hover:bg-[#F7F5F0] cursor-pointer"
                  >
                    <span className="font-semibold text-[#131914] text-xs block">Digital Courses & Guides</span>
                    <span className="text-[11px] text-[#656C64]">Downloadable audio grimoires & PDFs</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. Media Center */}
          <button
            onClick={() => handleNavClick('media')}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#131914] hover:bg-[#F2EFE8] transition-colors"
          >
            Media
          </button>

          {/* 6. Community */}
          <button
            onClick={() => handleNavClick('three-houses')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#131914] hover:bg-[#F2EFE8] transition-colors"
          >
            <span>Community</span>
            <span className="text-[10px] font-mono px-2 py-0.2 bg-[#D6E3CE] text-[#131914] rounded-full font-bold">WithMe</span>
          </button>

          {/* 7. About */}
          <button
            onClick={() => handleNavClick('founder')}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#131914] hover:bg-[#F2EFE8] transition-colors"
          >
            About
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search sanctuary"
            className="p-2.5 rounded-full text-[#131914] hover:bg-[#F2EFE8] transition-colors"
            title="Search knowledge catalog"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label={`View cart (${cartCount} items)`}
            className="relative p-2.5 rounded-full text-[#131914] hover:bg-[#F2EFE8] transition-colors"
            title="View Apothecary Bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute 1 top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#131914] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary Action Button: Free Soul Call */}
          <button
            onClick={onOpenSoulCall}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#131914] hover:bg-[#253026] text-white text-xs font-medium tracking-wide transition-all shadow-xs"
          >
            <span>Free Soul Call</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden p-2 rounded-full text-[#131914] hover:bg-[#F2EFE8]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-auto max-w-7xl bg-white border border-[#E8E5DD] rounded-3xl shadow-2xl p-6 pointer-events-auto animate-fadeIn">
          <div className="flex flex-col gap-3 text-sm">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left font-medium text-[#131914] py-2 border-b border-[#E8E5DD]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('schools')}
              className="text-left font-medium text-[#131914] py-2 border-b border-[#E8E5DD] flex items-center justify-between"
            >
              <span>Schools & Courses</span>
              <span className="text-xs font-mono text-[#656C64]">University & By-Mail</span>
            </button>
            <button
              onClick={() => handleNavClick('offerings')}
              className="text-left font-medium text-[#131914] py-2 border-b border-[#E8E5DD] flex items-center justify-between"
            >
              <span>Offerings & Bookings</span>
              <span className="text-xs font-mono text-[#656C64]">SoulMirror</span>
            </button>
            <button
              onClick={() => handleNavClick('apothecary')}
              className="text-left font-medium text-[#131914] py-2 border-b border-[#E8E5DD] flex items-center justify-between"
            >
              <span>Apothecary & Shop</span>
              <span className="text-xs font-mono text-[#656C64]">Handmade Oils</span>
            </button>
            <button
              onClick={() => handleNavClick('media')}
              className="text-left font-medium text-[#131914] py-2 border-b border-[#E8E5DD] flex items-center justify-between"
            >
              <span>Media Center</span>
              <span className="text-xs font-mono text-[#656C64]">TV Channel 436</span>
            </button>
            <button
              onClick={() => handleNavClick('three-houses')}
              className="text-left font-medium text-[#131914] py-2 border-b border-[#E8E5DD] flex items-center justify-between"
            >
              <span>Community</span>
              <span className="text-xs font-mono text-[#131914] bg-[#D6E3CE] px-2 py-0.5 rounded-full">WithMe</span>
            </button>
            <button
              onClick={() => handleNavClick('founder')}
              className="text-left font-medium text-[#131914] py-2 border-b border-[#E8E5DD]"
            >
              Meet Telu'an Veyar
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left font-medium text-[#131914] py-2 border-b border-[#E8E5DD]"
            >
              Knowledge Catalog & FAQ
            </button>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSoulCall();
                }}
                className="w-full py-3 rounded-full bg-[#131914] text-white font-medium text-center text-xs tracking-wide"
              >
                Book Free Soul Connection Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
