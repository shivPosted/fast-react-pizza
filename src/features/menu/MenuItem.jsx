import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { currencyFormatter } from "../../util";
import { addItem } from "../cart/cartSlice";

function MenuItem({ item }) {
  const dispatch = useDispatch();

  const { imageUrl: url, id, name, ingredients, unitPrice, soldOut } = item;

  function handleAddCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addItem(newItem));
  }
  return (
    <li className="flex  gap-4 py-2">
      <img
        className={`h-32 ${soldOut && "opacity-70 grayscale"} `}
        src={url}
        alt={`${name}-image`}
      />
      <div className="flex flex-grow flex-col gap-2">
        <h3 className="text-base font-semibold md:text-xl">{name}</h3>
        <p className="capitalize text-sm md:text-base">
          {ingredients.join(", ")}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <p className={`${soldOut && "uppercase text-stone-500"} `}>
            {" "}
            {soldOut ? "Sold Out" : currencyFormatter(unitPrice)}
          </p>
          {!soldOut && (
            <Button type="secondary" clickHandler={handleAddCart}>
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
export default MenuItem;
