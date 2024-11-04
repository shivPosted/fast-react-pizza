import { Link } from "react-router-dom";

function Cartoverview() {
  return (
    <div className="bg-stone-700 text-stone-200 uppercase flex justify-between items-center px-6 py-8 sm:p-4">
      <p className="text-stone-300 font-bold space-x-2">
        <span>30 pizzas</span>
        <span>$35.50</span>
      </p>
      <div  >

        <Link to="/order/new">Order Pizzas</Link>
      </div>
    </div>
  );
}
export default Cartoverview;
