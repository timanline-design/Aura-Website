import { useState, useEffect } from 'react';
import Navbar, { CartDrawer } from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'shop'>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Simple routing based on hash or state
  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.pathname;
      if (path === '/shop') {
        setCurrentPage('shop');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handleHashChange);
    // Initial check
    const path = window.location.pathname;
    if (path === '/shop') setCurrentPage('shop');

    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  // Intercept clicks on internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = target.getAttribute('href')!;
        window.history.pushState({}, '', href);
        setCurrentPage(href === '/shop' ? 'shop' : 'home');
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-aura-bg selection:bg-aura-surface selection:text-aura-primary">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        cartCount={cartCount} 
      />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
      />

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {currentPage === 'home' ? (
              <Home onAddToCart={addToCart} />
            ) : (
              <Shop onAddToCart={addToCart} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
