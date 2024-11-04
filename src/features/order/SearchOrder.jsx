import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [orderNum, setOrderNum] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!orderNum) return null;
    navigate(`/order/${orderNum}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={orderNum}
        type="text"
        placeholder="Search by Order#"
        onChange={(e) => setOrderNum(e.target.value)}
        className="px-4 py-2 rounded-full text-stone-400 bg-yellow-100 w-28 text-sm  sm:w-64 focus:ring focus:outline-none focus:ring-yellow-400 focus:ring-opacity-50 sm:focus:w-72 transition-all duration-300   "
      />
    </form>
  );
}
export default SearchOrder;
