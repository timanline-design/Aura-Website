export interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  tag?: string;
  rating?: number;
  reviews?: number;
  skinType: string[];
  concern: string[];
  productType: string;
}

export interface CartItem extends Product {
  quantity: number;
}
