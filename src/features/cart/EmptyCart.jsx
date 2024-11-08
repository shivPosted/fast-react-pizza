import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="my-4 mx-2">
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h2 className="mt-4 text-xl font-bold mx-4">
        Your Cart is Empty. Start Adding Items to your Cart :(
      </h2>
    </div>
  );
}
export default EmptyCart;
