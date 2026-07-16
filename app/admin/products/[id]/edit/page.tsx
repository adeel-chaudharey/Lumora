import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

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
      <h1 className="text-3xl font-bold text-white">
        Edit Product
      </h1>

      <pre className="mt-8 rounded-xl bg-slate-900 p-4 text-white overflow-auto">
        {JSON.stringify(product, null, 2)}
      </pre>
    </div>
  );
}