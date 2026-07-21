import ProductCard from "./ProductCard";
import { StoreProduct } from "@/types/storefront";
interface Props {
  products: StoreProduct[];
}
export default function ProductGrid({
  products,
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}