import { useLoaderData } from "react-router-dom";
const baseURL = import.meta.env.VITE_API_BASE_URL;
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

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
  const res = await fetch(`${baseURL}/men`);
  if (!res.ok) throw Error("Could not fetch data.");
  const { data } = await res.json();
  return data;
}

export { menuLoader };

export default Menu;
