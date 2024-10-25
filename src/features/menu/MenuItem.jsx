import { currencyFormatter } from "../../util";

function MenuItem({ item }) {
  const { imageUrl: url, name, ingredients, unitPrice } = item;

  return (
    <li>
      <img src={url} alt={`${name}-image`} />
      <h3>{name}</h3>
      <p>{ingredients.join(",")}</p>
      <p>{currencyFormatter(unitPrice)}</p>
    </li>
  );
}
export default MenuItem;
