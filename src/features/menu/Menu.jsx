import { useLoaderData } from "react-router-dom";
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

async function loader() {
  const menu = await getMenu();
  return menu;
}

export { loader };

export default Menu;
