export interface StoreProduct {
  id: string;

  name: string;

  slug: string;

  short_description: string | null;

  description: string;

  price: number;

  compare_price: number | null;

  sku: string;

  stock: number;

  image_url: string | null;

  thumbnail: string | null;

  status: string;

  featured: boolean;

  brand: string | null;

  category_id: string | null;

  created_at: string;

  updated_at: string;
}