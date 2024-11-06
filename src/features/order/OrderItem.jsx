import { currencyFormatter } from "../../util";

function OrderItem({ item }) {
  return (
    <li className="flex flex-wrap justify-between gap-x-4 py-4">
      <p>
        {item.quantity}x{item.name}
      </p>
      <p className="font-medium">{currencyFormatter(item.totalPrice)}</p>
    </li>
  );
}
export default OrderItem;
