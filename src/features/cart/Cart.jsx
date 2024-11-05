import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  return (
    <div className="mt-6 px-4">
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h2 className="mt-2  font-bold md:text-2xl md:font-semibold ">
        Your Pizzas Shiv
      </h2>
      <ul className="my-2">
        {fakeCart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>{" "}
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order Pizza
        </Button>
        <Button type="tertiary">Clear Cart</Button>
      </div>
    </div>
  );
}
export default Cart;
