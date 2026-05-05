import { ChevronRight, Filter } from 'lucide-react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { useState, useMemo } from 'react';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export default function Shop({ onAddToCart }: ShopProps) {
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const skinTypes = ['Normal to Dry', 'Combination', 'Oily', 'Sensitive'];
  const concerns = ['Hydration', 'Anti-Aging', 'Brightness'];
  const productTypes = ['Cleansers', 'Serums', 'Moisturizers', 'Masks'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.productType);
      const skinMatch = selectedSkinTypes.length === 0 || selectedSkinTypes.some(t => product.skinType.includes(t));
      const concernMatch = selectedConcerns.length === 0 || selectedConcerns.some(c => product.concern.includes(c));
      return typeMatch && skinMatch && concernMatch;
    });
  }, [selectedSkinTypes, selectedConcerns, selectedTypes]);

  const toggleFilter = (list: string[], setList: (n: string[]) => void, value: string) => {
    if (list.includes(value)) {
      setList(list.filter(v => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <header className="px-6 md:px-12 max-w-7xl mx-auto py-12 border-b border-stone-200">
        <nav className="flex items-center gap-2 mb-8 text-[10px] text-aura-muted uppercase tracking-widest">
          <a href="/" className="hover:text-aura-primary transition-colors">Home</a>
          <ChevronRight size={10} />
          <span className="text-aura-text">Skincare</span>
        </nav>
        
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl text-aura-text mb-6">Skincare</h1>
            <p className="font-sans text-sm md:text-lg text-aura-muted max-w-xl leading-relaxed">
              Our botanical-based formulations are engineered with high-potency organic actives. We prioritize ingredient transparency and ethical sourcing.
            </p>
          </div>
          <div className="flex justify-end gap-6 text-[10px] font-bold uppercase tracking-widest text-aura-muted">
            <span className="text-aura-primary">{filteredProducts.length} PRODUCTS</span>
            <span className="border-b border-transparent hover:border-aura-text cursor-pointer transition-all">Sort By: Featured</span>
          </div>
        </div>
      </header>

      <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 py-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
          <div className="flex items-center gap-2 lg:hidden mb-8 p-4 bg-stone-100 rounded-sm">
            <Filter size={16} />
            <span className="text-xs uppercase font-bold tracking-widest">Filters</span>
          </div>

          <FilterGroup 
            title="Skin Type" 
            options={skinTypes} 
            selected={selectedSkinTypes} 
            onToggle={(v) => toggleFilter(selectedSkinTypes, setSelectedSkinTypes, v)}
          />
          <FilterGroup 
            title="Concern" 
            options={concerns} 
            selected={selectedConcerns} 
            onToggle={(v) => toggleFilter(selectedConcerns, setSelectedConcerns, v)}
          />
          <FilterGroup 
            title="Product Type" 
            options={productTypes} 
            selected={selectedTypes} 
            onToggle={(v) => toggleFilter(selectedTypes, setSelectedTypes, v)}
          />
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-lg text-aura-muted">No botanical formulations match your selection.</p>
              <button 
                onClick={() => {setSelectedSkinTypes([]); setSelectedConcerns([]); setSelectedTypes([]);}}
                className="mt-6 text-sm underline uppercase tracking-widest text-aura-primary"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          )}

          {/* Pagination Placeholder */}
          <div className="mt-24 flex justify-center items-center gap-8 border-t border-stone-200 pt-12">
            <button className="text-stone-300 cursor-not-allowed">
              <ChevronRight className="rotate-180" />
            </button>
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
              <span className="text-aura-text border-b border-aura-text pb-1">1</span>
              <span className="text-aura-muted cursor-pointer hover:text-aura-text transition-colors">2</span>
            </div>
            <button className="text-aura-text hover:translate-x-1 transition-transform">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, options, selected, onToggle }: { title: string; options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div>
      <h3 className="font-sans text-[10px] text-aura-text mb-6 uppercase tracking-[0.2em] border-b border-stone-100 pb-2 font-bold">{title}</h3>
      <ul className="space-y-4 font-sans text-sm text-aura-muted">
        {options.map(option => (
          <li 
            key={option}
            onClick={() => onToggle(option)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className={`w-4 h-4 border transition-colors ${selected.includes(option) ? 'border-aura-primary bg-aura-primary/10' : 'border-stone-300 group-hover:border-aura-accent'}`}></div>
            <span className={`transition-colors ${selected.includes(option) ? 'text-aura-primary font-medium' : 'group-hover:text-aura-primary'}`}>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
