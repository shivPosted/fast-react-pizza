import LinkButton from "../../ui/LinkButton";

function Cart() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h2>Your Pizzas Shiv</h2>
      <div>
        <button>Clear Cart</button>
      </div>
    </div>
  );
}
export default Cart;
