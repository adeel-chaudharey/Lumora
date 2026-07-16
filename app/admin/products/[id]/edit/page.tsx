import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import ProductForm from "@/components/products/ProductForm";
type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage({
  params,
}: PageProps) {
  const { id } = await params;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    return (
      <div className="p-8 text-red-500">
        Product not found.
      </div>
    );
  }
return (
  <div className="p-8">
    <ProductForm
  productId={product.id}
  initialData={{
        name: product.name,
        slug: product.slug,

        shortDescription: product.short_description ?? "",
        description: product.description ?? "",

        categoryId: product.category_id ?? "",

        price: product.price ?? 0,
        comparePrice: product.compare_price ?? 0,
        costPrice: 0,

        tax: 0,
        currency: "USD",

        sku: product.sku ?? "",
        barcode: "",

        stock: product.stock ?? 0,
        lowStockAlert: 0,

        weight: product.weight ?? 0,
        brand: product.brand ?? "",

        seoTitle: product.seo_title ?? "",
        seoDescription: product.seo_description ?? "",

        videoUrl: product.video_url ?? "",
      }}
    />
  </div>
);
}
