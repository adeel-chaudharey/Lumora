import { OrderItem } from "@/app/admin/orders/types";

interface Props {
  items: OrderItem[];
}

export default function OrderItems({
  items,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Order Items
      </h2>

      {items.length === 0 ? (
        <p className="text-slate-400">
          No items.
        </p>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="pb-4 text-left">
                Product
              </th>

              <th className="pb-4 text-left">
                Qty
              </th>

              <th className="pb-4 text-left">
                Price
              </th>

              <th className="pb-4 text-left">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-800"
              >
                <td className="py-4">
                  {item.product_name}
                </td>

                <td>{item.quantity}</td>

                <td>
                  ${Number(item.unit_price).toFixed(2)}
                </td>

                <td>
                  ${Number(item.subtotal).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}