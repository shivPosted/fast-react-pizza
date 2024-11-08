import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getItemsTotalPrice, getItemTotalQuantity } from "./cartSlice";
import { currencyFormatter } from "../../util";

function Cartoverview() {
  const totalItemQuantity = useSelector(getItemTotalQuantity);
  const totalPrice = useSelector(getItemsTotalPrice);

  if (!totalItemQuantity) return null;

  return (
    <div className="bg-stone-700 text-stone-200 uppercase flex justify-between items-center px-6 py-8 sm:p-4">
      <p className="text-stone-300 font-bold space-x-2">
        <span>{totalItemQuantity} pizzas</span>
        <span>{currencyFormatter(totalPrice)}</span>
      </p>
      <div>
        <Link to="/cart">Open Cart &rarr;</Link>
      </div>
    </div>
  );
}
export default Cartoverview;
