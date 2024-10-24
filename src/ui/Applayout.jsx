import { Outlet } from "react-router-dom";
import Cartoverview from "../features/cart/Cartoverview";
import Header from "./Header";

function Applayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Cartoverview />
    </div>
  );
}
export default Applayout;
