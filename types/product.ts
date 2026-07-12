export interface ProductFormData {
  name: string;
  slug: string;

  shortDescription: string;
  description: string;

  categoryId: string;

  price: number;
  comparePrice: number;
  costPrice: number;

  tax: number;
  currency: string;

  sku: string;
  barcode: string;

  stock: number;
  lowStockAlert: number;

  weight: number;
  brand: string;

  seoTitle: string;
  seoDescription: string;

  videoUrl: string;
}