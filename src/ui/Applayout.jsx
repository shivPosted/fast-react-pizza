import { Outlet, useNavigation } from "react-router-dom";
import Cartoverview from "../features/cart/Cartoverview";
import Header from "./Header";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"; // checking if the data is loading

  return (
    <div className="layout">
      {isLoading && <Loader />}
      {/*displaying loader when data is loading by checking the isLoading derived earlier*/}
      <Header />
      <Outlet />
      <Cartoverview />
    </div>
  );
}
export default Applayout;
