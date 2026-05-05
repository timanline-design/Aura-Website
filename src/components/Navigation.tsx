import { Search, ShoppingBag, X, Menu, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from './Link'; // I'll create a simple link component for internal nav

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
}

export default function Navbar({ onCartClick, cartCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Simple scroll effect for glassmorphism
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="/" className="font-serif text-2xl tracking-[0.3em] uppercase text-aura-text">
            AURA
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="/shop" className="text-aura-text border-b border-aura-text pb-1 font-serif text-xs tracking-widest uppercase">
              Shop
            </a>
            <a href="#" className="text-aura-muted uppercase text-xs tracking-widest font-serif hover:text-aura-accent transition-colors">
              Our Mission
            </a>
            <a href="#" className="text-aura-muted uppercase text-xs tracking-widest font-serif hover:text-aura-accent transition-colors">
              Account
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6 text-aura-accent">
          <button className="hover:scale-110 transition-transform cursor-pointer">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button 
            onClick={onCartClick}
            className="hover:scale-110 transition-transform cursor-pointer relative"
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-aura-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function CartDrawer({ isOpen, onClose, items }: { isOpen: boolean; onClose: () => void; items: any[] }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          />
          <motion.aside 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] z-[70] bg-aura-surface border-l border-stone-200 shadow-2xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col">
                <h2 className="text-lg font-serif uppercase tracking-widest text-aura-accent">Your Selection</h2>
                <p className="text-xs font-serif text-stone-600">Sustainable beauty, mindfully chosen.</p>
              </div>
              <button 
                onClick={onClose}
                className="text-aura-muted hover:text-aura-text transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
              {items.length === 0 ? (
                <>
                  <ShoppingBag size={48} className="text-stone-300" strokeWidth={1} />
                  <p className="font-serif text-stone-500">Your bag is currently empty.</p>
                </>
              ) : (
                <div className="w-full text-left space-y-6">
                  {/* Real cart implementation would go here */}
                  <p className="font-serif text-sm">Reviewing your botanical selections...</p>
                </div>
              )}
            </div>

            <button className="w-full bg-aura-accent text-white py-5 font-serif tracking-widest text-sm hover:bg-aura-primary transition-colors mt-8">
              PROCEED TO CHECKOUT
            </button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
