import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { baseURL } from "../../util";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-300 ">
      {menu?.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

async function menuLoader() {
  const res = await fetch(`${baseURL}/menu`);
  if (!res.ok) throw Error("Could not fetch data.");
  const { data } = await res.json();
  const newData = data.map((item) => {
    return {
      ...item,
      unitPrice: item.unitPrice * 50,
    };
  });
  return newData;
}

export { menuLoader };

export default Menu;
