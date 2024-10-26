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
        placeholder="Search by Order#..."
        onChange={(e) => setOrderNum(e.target.value)}
      />
    </form>
  );
}
export default SearchOrder;
