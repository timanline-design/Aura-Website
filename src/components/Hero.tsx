import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ytNTGRdKCOG7E6IC9ima3iBbG46cv5FMfONwbMwIkwS-2EOKDpxrfOqlOOBkEWtHccX6zpFq2UVVwfMtFQP-wyeoXit7ZvkH7toDn5dLbTUctJT60YjnWvEDuzOGbAe2fBxoMEgcAEGWdIwKyT_-OK6po9YmCP23U72yXaQX9obK2dQ-tNAPeyqILfJ2GQeAPCsuMTC76tTOakR05DsdQTYzM-YtcqF8IKqmWtOdPdqXyela9GAFDdVi8relsfXPesR-7ivYpsa0" 
          alt="Clean beauty aesthetics" 
          className="w-full h-full object-cover brightness-[0.9] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-aura-text mb-6 block"
        >
          Sustainable Luxury
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl text-aura-text mb-8 leading-tight"
        >
          Clean beauty,<br />cleaner planet
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-sm md:text-lg text-aura-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Mindfully crafted skincare that respects your skin and the earth. Discover the power of cold-pressed botanicals in 100% recycled glass packaging.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="bg-aura-primary text-white px-10 py-4 font-serif text-xs uppercase tracking-widest hover:bg-aura-accent transition-colors cursor-pointer">
            Shop Collection
          </button>
          <button className="border border-aura-text px-10 py-4 font-serif text-xs uppercase tracking-widest hover:bg-aura-text hover:text-white transition-all cursor-pointer">
            Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
