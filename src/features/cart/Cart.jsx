import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <Link
        to="/menu"
        className="text- font-bold text-blue-500 hover:underline hover:text-blue-600"
      >
        &larr; Back to Menu
      </Link>
      <h2>Your Pizzas Shiv</h2>
      <div>
        <button>Clear Cart</button>
      </div>
    </div>
  );
}
export default Cart;
