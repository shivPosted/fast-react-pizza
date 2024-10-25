import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <Link to="/menu">&larr; Back to Menu</Link>
      <h2>Your Pizzas Shiv</h2>
      <div>
        <Link to="/order/new">Order Pizzas</Link>
        <button>Clear Cart</button>
      </div>
    </div>
  );
}
export default Cart;
