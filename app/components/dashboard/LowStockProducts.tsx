import Image from "next/image";

type Product = {
  id: string;
  name: string;
  stock: number;
  low_stock_alert: number;
  image_url: string | null;
};

type Props = {
  products: Product[];
};

export default function LowStockProducts({
  products,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Low Stock Products
      </h2>

      <div className="space-y-4">
        {products.length === 0 ? (
          <p className="text-emerald-400">
            🎉 All products are sufficiently stocked.
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-slate-800">
                    📦
                  </div>
                )}

                <div>
                  <p className="font-medium text-white">
                    {product.name}
                  </p>

                  <p className="text-sm text-red-400">
                    Stock: {product.stock}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
                Alert: {product.low_stock_alert}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}