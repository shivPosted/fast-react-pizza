import { currencyFormatter } from "../../util";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  return (
    <li className="flex flex-wrap justify-between gap-x-4 py-4">
      <div className="font-medium">
        {item.quantity}x{item.name}
        <p className="text-sm font-normal">
          {isLoadingIngredients ? "loading..." : ingredients.join(", ")}
        </p>
      </div>
      <p className="font-semibold">{currencyFormatter(item.totalPrice)}</p>
    </li>
  );
}
export default OrderItem;
