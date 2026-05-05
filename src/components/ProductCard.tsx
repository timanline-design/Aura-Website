import { Star } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="aspect-[3/4] bg-aura-surface overflow-hidden relative mb-6">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
              {product.tag}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
        <button 
          onClick={() => onAddToCart?.(product)}
          className="absolute bottom-0 left-0 w-full bg-aura-primary text-white py-4 font-sans text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-500 uppercase tracking-widest cursor-pointer"
        >
          Quick Add — ${product.price}
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h4 className="font-serif text-lg text-aura-text">{product.name}</h4>
          <span className="font-sans text-sm text-aura-muted">${product.price.toFixed(2)}</span>
        </div>
        <p className="font-sans text-[10px] text-aura-muted uppercase tracking-wider">{product.type}</p>
        {(product.rating !== undefined) && (
          <div className="flex items-center gap-1 pt-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={i < (product.rating || 0) ? "fill-aura-primary text-aura-primary" : "text-stone-300"} 
              />
            ))}
            <span className="text-[10px] text-aura-muted ml-1">({product.reviews})</span>
          </div>
        )}
      </div>
    </motion.article>
  );
}
