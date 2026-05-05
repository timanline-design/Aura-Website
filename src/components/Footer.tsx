import { Leaf, Recycle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-24 px-6 md:px-12 flex flex-col items-center bg-stone-50 border-t border-stone-200">
      <div className="font-serif text-2xl tracking-[0.4em] text-aura-text uppercase mb-16 px-4 py-2 border-x border-aura-text/10">
        AURA
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 w-full max-w-7xl mb-24 text-center md:text-left">
        <div className="space-y-6">
          <h5 className="font-serif text-sm uppercase tracking-widest text-aura-accent">About</h5>
          <p className="font-sans text-xs text-aura-muted leading-relaxed max-w-xs mx-auto md:mx-0">
            Dedicated to the alchemy of nature and science. Our products are crafted in small batches to ensure potency and purity.
          </p>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-serif text-sm uppercase tracking-widest text-aura-accent">Explore</h5>
          <ul className="space-y-3 font-sans text-xs">
            <li><a href="/shop" className="text-aura-muted hover:text-aura-text transition-colors">Shop All</a></li>
            <li><a href="#" className="text-aura-muted hover:text-aura-text transition-colors">Sustainability Report</a></li>
            <li><a href="#" className="text-aura-muted hover:text-aura-text transition-colors">Ingredient Transparency</a></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-serif text-sm uppercase tracking-widest text-aura-accent">Support</h5>
          <ul className="space-y-3 font-sans text-xs">
            <li><a href="#" className="text-aura-muted hover:text-aura-text transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="text-aura-muted hover:text-aura-text transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-aura-muted hover:text-aura-text transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h5 className="font-serif text-sm uppercase tracking-widest text-aura-accent">Newsletter</h5>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Join our circle"
              className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-aura-accent font-serif text-sm italic placeholder:text-stone-400"
            />
            <button className="absolute right-0 bottom-2 text-stone-400 hover:text-aura-accent transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-7xl flex flex-col items-center gap-8 border-t border-stone-200 pt-12">
        <div className="flex gap-12">
          <Leaf size={20} className="text-stone-300 hover:text-aura-accent cursor-pointer transition-colors" strokeWidth={1.5} />
          <Recycle size={20} className="text-stone-300 hover:text-aura-accent cursor-pointer transition-colors" strokeWidth={1.5} />
          <Heart size={20} className="text-stone-300 hover:text-aura-accent cursor-pointer transition-colors" strokeWidth={1.5} />
        </div>
        <p className="font-serif text-[10px] tracking-[0.2em] text-stone-400 uppercase">
          © {new Date().getFullYear()} AURA SUSTAINABLE SKINCARE. B-CORP CERTIFIED.
        </p>
      </div>
    </footer>
  );
}
