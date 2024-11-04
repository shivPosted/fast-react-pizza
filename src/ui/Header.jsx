import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className=" flex items-center justify-between bg-yellow-500 uppercase px-6 py-8 md:px-4 ">
      <Link to="/" className="tracking-widest">
        --Fast React Pizza--
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
