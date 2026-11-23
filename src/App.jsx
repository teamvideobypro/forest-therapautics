import { useState } from 'react';
import SanctuaryHeader from './components/SanctuaryHeader';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import ThreeHousesSection from './components/ThreeHousesSection';
import SchoolsSection from './components/SchoolsSection';
import OfferingsSection from './components/OfferingsSection';
import ApothecarySection from './components/ApothecarySection';
import MediaCenterSection from './components/MediaCenterSection';
import FounderSection from './components/FounderSection';
import KnowledgeFaqSection from './components/KnowledgeFaqSection';
import LeadMagnetFooter from './components/LeadMagnetFooter';
import BlueprintView from './components/BlueprintView';

// Modals & Drawers
import SoulCallModal from './components/modals/SoulCallModal';
import CartDrawer from './components/modals/CartDrawer';
import SanctuaryGuideDrawer from './components/modals/SanctuaryGuideDrawer';
import CurriculumModal from './components/modals/CurriculumModal';
import ScholarshipModal from './components/modals/ScholarshipModal';
import ArticleReaderModal from './components/modals/ArticleReaderModal';
import SearchModal from './components/modals/SearchModal';
import HouseDetailModal from './components/modals/HouseDetailModal';
import MembershipModal from './components/modals/MembershipModal';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Play, X, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('homepage'); // 'homepage' or 'blueprint'
  const stripInspectorActive = false;

  // Single-trigger scroll reveal hook
  useScrollReveal(currentView);
  
  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      id: "hand-oil-1",
      title: "Forest Coherence Anointing Oil",
      category: "handmade",
      price: 48,
      size: "30ml Violet Miron Glass",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80"
    }
  ]);

  // Modal open states
  const [isSoulCallOpen, setIsSoulCallOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAiGuideOpen, setIsAiGuideOpen] = useState(false);
  const [curriculumModal, setCurriculumModal] = useState({ isOpen: false, mode: 'yellow-envelope' });
  const [houseModal, setHouseModal] = useState({ isOpen: false, houseId: 'skillspring' });
  const [membershipModal, setMembershipModal] = useState({ isOpen: false, tier: 'second-ascension' });
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const navigateToSection = (sectionId) => {
    if (currentView !== 'homepage') {
      setCurrentView('homepage');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#3B2E26] selection:bg-[#C99738]/30 selection:text-[#1F362C]">
      {/* Global Sanctuary Header */}
      <SanctuaryHeader
        onOpenSoulCall={() => setIsSoulCallOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateSection={navigateToSection}
      />

      {/* VIEW 1: NATIVE WIX HOMEPAGE CONCEPT */}
      {currentView === 'homepage' && (
        <main>
          {/* Section 1: Grounding Sanctuary Hero */}
          <HeroSection
            onExploreSchools={() => navigateToSection('schools')}
            onBookGuidance={() => setIsSoulCallOpen(true)}
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 2: Philosophy & Welcome ("How This Space Is Held") */}
          <PhilosophySection
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 3: The Three Houses Ecosystem */}
          <ThreeHousesSection
            onExploreWix={(id) => setHouseModal({ isOpen: true, houseId: id || 'wix' })}
            onOpenClassroomModal={(id) => setHouseModal({ isOpen: true, houseId: id || 'skillspring' })}
            onOpenCommunityModal={(id) => setHouseModal({ isOpen: true, houseId: id || 'withme' })}
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 4: Our Schools & Educational Divisions */}
          <SchoolsSection
            onOpenCurriculum={(tier) => setMembershipModal({ isOpen: true, tier: tier || 'second-ascension' })}
            onOpenYellowEnvelope={() => setCurriculumModal({ isOpen: true, mode: 'yellow-envelope' })}
            onOpenCourseModal={(course) => setActiveCourseModal(course)}
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 5: 1:1 Offerings, Bookings & Public Gatherings */}
          <OfferingsSection
            onBookImmersion={() => setIsSoulCallOpen(true)}
            onBookSoulMirror={() => setIsSoulCallOpen(true)}
            onOpenSoulCall={() => setIsSoulCallOpen(true)}
            onReserveGathering={() => setIsSoulCallOpen(true)}
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 6: The Sanctuary Shop & Apothecary */}
          <ApothecarySection
            onAddToCart={handleAddToCart}
            onQuickViewProduct={(prod) => {
              handleAddToCart(prod);
              setIsCartOpen(true);
            }}
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 7: Media Center & Broadcast TV */}
          <MediaCenterSection
            onOpenArticle={(art) => setActiveArticle(art)}
            onPlayEpisode={(ep) => setActiveVideoModal(ep)}
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 8: Meet Telu'an Veyar & The Living Root Scholarship */}
          <FounderSection
            onOpenScholarshipModal={() => setIsScholarshipOpen(true)}
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 9: AI Knowledge Catalog & FAQ Accordion */}
          <KnowledgeFaqSection
            onOpenAiGuide={() => setIsAiGuideOpen(true)}
            stripInspectorActive={stripInspectorActive}
          />

          {/* Section 10: Lead Magnet Email Course & Global Footer */}
          <LeadMagnetFooter
            onNavigateSection={navigateToSection}
            onOpenSoulCall={() => setIsSoulCallOpen(true)}
            onOpenScholarship={() => setIsScholarshipOpen(true)}
            stripInspectorActive={stripInspectorActive}
          />
        </main>
      )}

      {/* VIEW 2: INTERACTIVE SITE ARCHITECTURE BLUEPRINT */}
      {currentView === 'blueprint' && (
        <main>
          <BlueprintView
            onSwitchToHomepage={() => setCurrentView('homepage')}
          />
          <LeadMagnetFooter
            onNavigateSection={navigateToSection}
            onOpenSoulCall={() => setIsSoulCallOpen(true)}
            onOpenScholarship={() => setIsScholarshipOpen(true)}
            stripInspectorActive={false}
          />
        </main>
      )}

      {/* Floating Quick Action Widget: Ask the Sanctuary Guide */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAiGuideOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#131914] hover:bg-[#253026] text-white border border-white/20 shadow-xl hover-lift text-xs font-medium tracking-wide transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#D6E3CE] animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-[#D6E3CE]" />
          <span className="hidden sm:inline">Ask Sanctuary Guide</span>
          <span className="sm:hidden">Guide</span>
        </button>
      </div>

      {/* All Drawers & Modals */}
      <SoulCallModal
        isOpen={isSoulCallOpen}
        onClose={() => setIsSoulCallOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <SanctuaryGuideDrawer
        isOpen={isAiGuideOpen}
        onClose={() => setIsAiGuideOpen(false)}
      />

      <HouseDetailModal
        isOpen={houseModal.isOpen}
        initialHouseId={houseModal.houseId}
        onClose={() => setHouseModal(prev => ({ ...prev, isOpen: false }))}
      />

      <MembershipModal
        isOpen={membershipModal.isOpen}
        initialTier={membershipModal.tier}
        onClose={() => setMembershipModal(prev => ({ ...prev, isOpen: false }))}
        onOpenSoulCall={() => setIsSoulCallOpen(true)}
        onOpenScholarship={() => setIsScholarshipOpen(true)}
      />

      <CurriculumModal
        isOpen={curriculumModal.isOpen}
        mode={curriculumModal.mode}
        onClose={() => setCurriculumModal({ isOpen: false, mode: 'yellow-envelope' })}
        onOpenSoulCall={() => setIsSoulCallOpen(true)}
      />

      <ScholarshipModal
        isOpen={isScholarshipOpen}
        onClose={() => setIsScholarshipOpen(false)}
      />

      <ArticleReaderModal
        isOpen={!!activeArticle}
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={navigateToSection}
      />

      {/* Video Transmission Modal (Episode 42) */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#131914] border border-white/10 p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 mb-4 pr-10">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-[#D6E3CE] font-bold uppercase tracking-wider">
                Broadcast TV • Channel 436
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white pt-1">
                {activeVideoModal.title}
              </h3>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center shadow-lg border border-white/10">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-white text-[#131914] flex items-center justify-center shadow-xl">
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                </div>
                <div className="text-sm font-semibold max-w-md text-white">
                  Simulated Video Transmission Stream • Host: Telu'an Veyar
                </div>
                <p className="text-xs text-white/70 max-w-sm">
                  Full 48-minute broadcast available on Roku Channel 436, Fire TV, and YouTube.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Strand Details Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E8E5DD] shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col">
            <button
              onClick={() => setActiveCourseModal(null)}
              className="absolute top-4 right-4 z-20 p-2.5 text-[#131914] bg-white/80 hover:bg-white rounded-full shadow-md backdrop-blur-xs transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Course Image Header if available */}
            {activeCourseModal.image && (
              <div className="relative h-44 w-full overflow-hidden shrink-0 bg-[#131914]">
                <img
                  src={activeCourseModal.image}
                  alt={activeCourseModal.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#D6E3CE] text-[#131914]">
                    {activeCourseModal.badge || activeCourseModal.eyebrow}
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {activeCourseModal.title}
                  </h3>
                </div>
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-5 flex-1">
              {!activeCourseModal.image && (
                <div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#F7F5F0] text-[#131914] font-bold border border-[#E8E5DD]">
                    {activeCourseModal.eyebrow || activeCourseModal.badge}
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-[#131914] mt-2">
                    {activeCourseModal.title}
                  </h3>
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#131914] leading-relaxed">
                {activeCourseModal.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#E8E5DD] text-xs text-[#131914] space-y-1">
                <div className="font-bold font-mono uppercase text-[10px] text-[#656C64]">
                  Curriculum Package & Access:
                </div>
                <div className="flex items-center gap-2 pt-0.5">
                  <BookOpen className="w-4 h-4 text-[#131914] shrink-0" />
                  <span>{activeCourseModal.lessons}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E5DD]">
                <div>
                  <div className="font-sans text-2xl font-bold text-[#131914]">
                    {activeCourseModal.price}
                  </div>
                  <div className="text-[10px] font-mono text-[#656C64]">
                    Direct Student Enrollment
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActiveCourseModal(null);
                    setIsSoulCallOpen(true);
                  }}
                  className="px-6 py-3 rounded-full bg-[#131914] hover:bg-[#253026] text-white text-xs font-medium uppercase tracking-wider transition-colors shadow-xs"
                >
                  Enroll / Inquire
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 text-[11px] text-[#656C64] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Encrypted Stripe Checkout</span>
                </span>
                <span>•</span>
                <span>Instant Digital Access</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
