import Button from "../../ui/Button";
import { currencyFormatter } from "../../util";

function MenuItem({ item }) {
  const { imageUrl: url, name, ingredients, unitPrice, soldOut } = item;

  return (
    <li className="flex  gap-4 py-2">
      <img
        className={`h-32 ${soldOut && "opacity-70 grayscale"} `}
        src={url}
        alt={`${name}-image`}
      />
      <div className="flex flex-grow flex-col gap-2">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="capitalize text-sm">{ingredients.join(", ")}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className={`${soldOut && "uppercase text-stone-500"} `}>
            {" "}
            {soldOut ? "Sold Out" : currencyFormatter(unitPrice)}
          </p>
          {!soldOut && <Button type="secondary">Add To Cart</Button>}
        </div>
      </div>
    </li>
  );
}
export default MenuItem;
