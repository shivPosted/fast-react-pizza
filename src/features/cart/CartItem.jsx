import Button from "../../ui/Button";
import { currencyFormatter } from "../../util";

function CartItem({ item }) {
  return (
    <li className="border border-b-stone-300 py-2 md:py6 md:flex md:items-center md:justify-between">
      <p className="text-sm">
        {item.quantity} x {item.name}
      </p>
      <div className="flex items-center justify-between space-x-4">
        <p className="text-sm font-bold md:text-base">
          {currencyFormatter(item.totalPrice)}
        </p>
        <Button type="secondary">delete</Button>
      </div>
    </li>
  );
}
export default CartItem;
