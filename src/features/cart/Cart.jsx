import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

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
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="mt-6 px-4">
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h2 className="my-4  font-bold md:text-2xl md:font-semibold ">
        Your Pizzas {userName}
      </h2>
      <ul className="my-2">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>{" "}
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order Pizza
        </Button>
        <Button clickHandler={handleClearCart} type="tertiary">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
export default Cart;
