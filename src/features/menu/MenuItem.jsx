import { currencyFormatter } from "../../util";

function MenuItem({ item }) {
  const { imageUrl: url, name, ingredients, unitPrice, soldOut } = item;

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-32 ${soldOut && "opacity-70 grayscale"} `}
        src={url}
        alt={`${name}-image`}
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-xl">{name}</h3>
        <p className="capitalize ">{ingredients.join(", ")}</p>
        <p className={`${soldOut && "uppercase text-stone-500"} mt-auto`}>
          {" "}
          {soldOut ? "Sold Out" : currencyFormatter(unitPrice)}
        </p>
      </div>
    </li>
  );
}
export default MenuItem;
