export interface OrderItem {
  id: string;
  product_name: string;
  sku: string | null;
  quantity: number;
  unit_price: number;
  subtotal: number;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;

  status: string;

  payment_status: string;
  fulfillment_status: string;

  tracking_number: string | null;
  stripe_payment_intent: string | null;

  created_at: string;

  order_items: OrderItem[];
}