import CartItem from "./CartItem";

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  items: CartProduct[];
}

export default function CartList({ items }: Props) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}