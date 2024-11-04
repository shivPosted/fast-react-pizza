import { Outlet, useNavigation } from "react-router-dom";
import Cartoverview from "../features/cart/Cartoverview";
import Header from "./Header";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"; // checking if the data is loading

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen ">
      <Header />
      {/*displaying loader when data is loading by checking the isLoading derived earlier*/}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-auto ">
          <main className="max-w-3xl  mx-auto ">
            <Outlet />
          </main>
        </div>
      )}
      <Cartoverview />
    </div>
  );
}
export default Applayout;
