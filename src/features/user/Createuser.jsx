import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Createuser() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.userName);

  if (userName)
    return (
      <Button type="primary" to="/menu">
        Continue Ordering, {userName}
      </Button>
    );

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(name));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm   sm:mb-4 sm:text-base sm:text-stone-700">
        👋 Type your name to start ordering...
      </p>
      <input
        type="text"
        placeholder="your name here..."
        className="input mb-8"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <Button type="primary">Start Ordering</Button>}
    </form>
  );
}
export default Createuser;
