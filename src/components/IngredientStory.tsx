import { motion } from 'motion/react';
import { Leaf, Science, ArrowRight } from 'lucide-react';

// Custom icons mapping for Lucide since Material symbols were used in HTML
export default function IngredientStory() {
  return (
    <section className="bg-aura-surface py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyMpq3h_3158uO3hXjEblsl9oaawJZ49XsjyCWN3kvaLuC4PYDFWZqxLa64nN_TI_yYdcngVoR0Qr2pqe4-lJzdGQMu3IM0gYT34JgLC5O39MWZN8iBVkzV-2uZQVuLtjQ9_G8ptUuJ06WIY2FKtFb17G3ww1tG-qLNZAJKi2fk50C2Tr0gk8w-EBJQ6PYIie36S6icwPpNOdMWaAn4m73o3JbgHCgMIMgdBwnaaWmy9n8A6UzFcs1Ehqb-CzOR0jVVq-TDuBYjNYq" 
            alt="Organic botanicals"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 bg-white p-10 hidden lg:block border border-stone-50 max-w-xs shadow-xl">
            <p className="font-serif italic text-lg leading-relaxed text-stone-600">
              "We believe what you put on your skin should be as pure as the earth it came from."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-sans text-[10px] text-aura-primary uppercase tracking-[0.3em] mb-6 block">Transparent Sourcing</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">The Alchemy of Nature</h2>
          <p className="font-sans text-sm md:text-lg text-aura-muted mb-12 leading-relaxed">
            Every AURA product starts with wild-harvested botanicals. We bypass industrial processing to maintain the molecular integrity of our ingredients, ensuring your skin receives the full potency of nature's wisdom.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 pb-8 border-b border-stone-200">
              <Leaf size={24} className="text-aura-primary flex-shrink-0" strokeWidth={1} />
              <div>
                <h4 className="font-serif font-bold uppercase tracking-widest text-[10px] mb-2">B-Corp Certified</h4>
                <p className="font-sans text-sm text-aura-muted leading-relaxed">Meeting the highest standards of verified social and environmental performance.</p>
              </div>
            </div>
            <div className="flex gap-6 pb-8 border-b border-stone-200">
              <div className="w-6 h-6 flex items-center justify-center text-aura-primary flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>
              </div>
              <div>
                <h4 className="font-serif font-bold uppercase tracking-widest text-[10px] mb-2">Biocompatible Formulas</h4>
                <p className="font-sans text-sm text-aura-muted leading-relaxed">Ingredients designed to work with your skin's natural biology, not against it.</p>
              </div>
            </div>
          </div>

          <button className="mt-12 group flex items-center gap-4 font-serif text-xs uppercase tracking-[0.2em] border-b border-aura-text pb-1 transition-all hover:gap-6 cursor-pointer">
            Read Our Transparency Report
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
