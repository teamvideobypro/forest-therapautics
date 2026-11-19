import { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const hasPhysical = cartItems.some(i => i.category !== 'digital');
  const shipping = hasPhysical ? (subtotal > 75 ? 0 : 6.95) : 0;
  const total = subtotal + shipping;

  const handleStripeCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderComplete(true);
    }, 1500);
  };

  const handleFinish = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F6F1E7] border-l border-[#3B2E26]/20 shadow-2xl flex flex-col justify-between paper-grain">
          {/* Header */}
          <div className="p-6 border-b border-[#3B2E26]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C99738]" />
              <h2 className="font-serif text-xl font-bold text-[#1F362C]">
                Your Apothecary Bag
              </h2>
              <span className="text-xs font-mono text-[#9A7225]">
                ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 rounded-full hover:bg-[#EFE6D2] text-[#3B2E26] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {orderComplete ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#1F362C] text-[#C99738] flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F362C]">
                  Order Placed via Stripe
                </h3>
                <p className="text-xs text-[#6B5B4E] leading-relaxed max-w-xs mx-auto">
                  Stripe Payment Simulation Successful. A confirmation receipt and shipment tracking details have been dispatched. Telu'an will hand-prepare your package.
                </p>
                <button
                  onClick={handleFinish}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#1F362C] text-[#F6F1E7] text-xs font-semibold uppercase tracking-wider"
                >
                  Close Bag
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 text-[#6B5B4E] space-y-3">
                <ShoppingBag className="w-12 h-12 stroke-[1.2] mx-auto text-[#C99738]/60" />
                <p className="font-serif text-lg font-medium text-[#1F362C]">
                  Your bag is currently empty
                </p>
                <p className="text-xs max-w-xs mx-auto">
                  Explore our handcrafted oils, ritual resins, or digital grimoires to begin.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[#EFE6D2]/60 border border-[#3B2E26]/10 flex gap-3 items-center justify-between"
                  >
                    <div className="w-14 h-14 rounded-lg bg-[#EFE6D2] overflow-hidden shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-serif font-bold text-sm text-[#1F362C] truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] font-mono text-[#9A7225]">
                        {item.price === 0 ? 'Free' : `$${item.price}`} • {item.size}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-5 h-5 rounded bg-white flex items-center justify-center text-[#1F362C] border border-[#3B2E26]/15 hover:bg-[#EFE6D2]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-5 h-5 rounded bg-white flex items-center justify-center text-[#1F362C] border border-[#3B2E26]/15 hover:bg-[#EFE6D2]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-serif font-bold text-base text-[#1F362C]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#9A7225] hover:text-rose-600 mt-2 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {!orderComplete && cartItems.length > 0 && (
            <div className="p-6 border-t border-[#3B2E26]/10 bg-[#EFE6D2]/80 space-y-4">
              <div className="space-y-1.5 text-xs text-[#6B5B4E]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-[#1F362C] font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping (USPS):</span>
                  <span className="font-mono text-[#1F362C]">
                    {shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1F362C] pt-2 border-t border-[#3B2E26]/10">
                  <span className="font-serif text-base">Total:</span>
                  <span className="font-mono">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                disabled={checkingOut}
                onClick={handleStripeCheckout}
                className="w-full py-3.5 px-6 rounded-full bg-[#1F362C] hover:bg-[#162820] text-[#F6F1E7] font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                {checkingOut ? (
                  <span>Connecting to Stripe Secure Gateway...</span>
                ) : (
                  <>
                    <span>Checkout with Stripe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#6B5B4E]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4A6351]" />
                <span>Bank-Level 256-Bit Encryption • Powered by Stripe</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
