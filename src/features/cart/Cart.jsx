import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

function Cart() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h2>Your Pizzas Shiv</h2>
      <div>
        <Button type="primary" to="/order/new">
          Order Pizza
        </Button>
        <button>Clear Cart</button>
      </div>
    </div>
  );
}
export default Cart;
