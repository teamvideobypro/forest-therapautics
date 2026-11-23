import { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  Eye
} from 'lucide-react';
import { APOTHECARY_PRODUCTS } from '../data/sanctuaryData';


export default function ApothecarySection({
  onAddToCart,
  onQuickViewProduct,
  stripInspectorActive
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedId, setAddedId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'handmade', label: "Handmade by Telu'an" },
    { id: 'azuregreen', label: 'Apothecary & Tools' },
    { id: 'digital', label: 'Digital Grimoires' },
    { id: 'books', label: 'Books & Guides' }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80", label: "Anointing Oils" },
    { url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80", label: "Sacred Resins" },
    { url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80", label: "Ritual Brassware" },
    { url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80", label: "Forest Herbs" }
  ];

  const filteredProducts = activeCategory === 'all'
    ? APOTHECARY_PRODUCTS
    : APOTHECARY_PRODUCTS.filter(p => p.category === activeCategory);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section 
      id="apothecary"
      className="py-10 sm:py-14"
    >
      {/* Wix Strip Inspector Header Tag */}
      {stripInspectorActive && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="wix-strip-badge">
            Wix Strip 06 • Photographic Collage & Curated Apothecary Store
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* PART 1: PHOTOGRAPHIC MOSAIC STRIP (Matches Reference Section 9) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 reveal-on-scroll">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DD] text-xs text-[#131914] font-medium shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#131914]" />
                <span>Sanctuary Tools</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#131914]">
                A glimpse into our <span className="font-accent">apothecary.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#656C64] max-w-sm">
              Hand-consecrated herbal oils, wildcrafted mountain botanicals, and ritual brass tools securely powered by Stripe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, gIdx) => {
              const staggerClass = `stagger-${(gIdx % 4) + 1}`;
              return (
                <div 
                  key={gIdx}
                  className={`group relative rounded-3xl overflow-hidden h-56 sm:h-64 shadow-xs bg-[#131914] reveal-on-scroll ${staggerClass}`}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 text-white text-xs font-medium tracking-wide">
                    {img.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: CURATED PRODUCT STOREHOUSE */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6 sm:mb-8 reveal-on-scroll">
            <h3 className="font-sans text-2xl font-semibold tracking-tight text-[#131914]">
              Sanctuary <span className="font-accent">Storehouse.</span>
            </h3>

            {/* Pill Category Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-white border border-[#E8E5DD] shadow-xs text-xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-[#131914] text-white shadow-xs'
                      : 'text-[#656C64] hover:text-[#131914]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid (4 Columns, Pure White Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product, pIdx) => {
              const staggerProduct = `stagger-${(pIdx % 4) + 1}`;
              return (
                <div 
                  key={product.id}
                  className={`rounded-3xl bg-white border border-[#E8E5DD] p-4 flex flex-col justify-between hover-lift shadow-xs reveal-on-scroll ${staggerProduct}`}
                >
                  <div>
                    <div className="relative rounded-2xl overflow-hidden h-44 mb-3.5 bg-[#F7F5F0]">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#131914]/85 text-white">
                        {product.tag}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-[#656C64] uppercase tracking-wider mb-1">
                      {product.maker}
                    </div>
                    <h4 className="font-sans text-base font-semibold text-[#131914] mb-1 line-clamp-1">
                      {product.title}
                    </h4>
                    <div className="text-xs text-[#656C64] font-mono mb-2">
                      {product.size}
                    </div>
                    <p className="text-xs text-[#656C64] line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E5DD] flex items-center justify-between gap-2">
                    <div className="font-sans text-lg font-bold text-[#131914]">
                      {product.price === 0 ? 'Free' : `$${product.price}`}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onQuickViewProduct(product)}
                        className="p-2 rounded-full border border-[#E8E5DD] text-[#131914] hover:bg-[#F7F5F0] transition-colors"
                        title="View details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleAdd(product)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                          addedId === product.id
                            ? 'bg-[#131914] text-white'
                            : 'bg-[#131914] text-white hover:bg-[#253026]'
                        }`}
                      >
                        {addedId === product.id ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3 h-3" />
                            <span>{product.price === 0 ? 'Get' : 'Add'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
