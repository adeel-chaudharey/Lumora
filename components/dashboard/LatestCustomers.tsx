type Customer = {
  id: string;
  customer_name: string;
  customer_email: string;
};

type Props = {
  customers: Customer[];
};

export default function LatestCustomers({
  customers,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Latest Customers
      </h2>

      <div className="space-y-4">
        {customers.length === 0 ? (
          <p className="text-slate-400">
            No customers yet.
          </p>
        ) : (
          customers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
            >
              <div>
                <p className="font-medium text-white">
                  {customer.customer_name}
                </p>

                <p className="text-sm text-slate-400">
                  {customer.customer_email}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}