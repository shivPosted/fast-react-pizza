import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  decreaseQuantity,
  getItemQuantity,
  increaseQuantity,
} from "../features/cart/cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getItemQuantity(id));

  return (
    <div className="flex justify-between gap-2 items-center">
      <Button clickHandler={() => dispatch(decreaseQuantity(id))} type="round">
        -
      </Button>
      <p className="font-bold">{itemQuantity}</p>
      <Button clickHandler={() => dispatch(increaseQuantity(id))} type="round">
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuantity;
