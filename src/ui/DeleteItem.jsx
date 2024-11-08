import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

function DelteItem({ id }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteItem(id));
  }
  return (
    <Button clickHandler={handleClick} type="secondary">
      delete
    </Button>
  );
}
export default DelteItem;
