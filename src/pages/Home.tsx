import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import IngredientStory from '../components/IngredientStory';
import TexturePreview from '../components/TexturePreview';
import ProductCard from '../components/ProductCard';
import { BESTSELLERS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <IngredientStory />
      
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-sans text-[10px] text-aura-primary uppercase tracking-widest mb-4 block">Most Loved</span>
          <h2 className="font-serif text-3xl md:text-5xl text-aura-text">Your Daily Ritual</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {BESTSELLERS.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      <TexturePreview />
    </main>
  );
}
