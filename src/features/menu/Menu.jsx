import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { baseURL } from "../../util";

function Menu() {
  const menu = useLoaderData();
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu?.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

async function menuLoader() {
  const res = await fetch(`${baseURL}/menu`);
  if (!res.ok) throw Error("Could not fetch data.");
  const { data } = await res.json();
  return data;
}

export { menuLoader };

export default Menu;
