import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createNewOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { clearCart, getCart, getItemsTotalPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../myStore";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    //test method on regexexpression returns a boolean by checking the passesd string
    str,
  );

function Createorder() {
  const [givePriority, setGivePriority] = useState(false);
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);
  const totalCartValue = useSelector(getItemsTotalPrice);

  const errorsIfAny = useActionData();
  console.log(errorsIfAny);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const priorityPrice = givePriority ? totalCartValue * 0.2 : 0;

  if (!cart.length) return <EmptyCart />;

  return (
    <Form method="post" className="py-6 px-4">
      <h2 className="font-bold md:text-xl md:font-semibold mb-8">
        Ready to Order? Let's Go{" "}
      </h2>{" "}
      <div className="flex flex-col  gap-2 md:flex-row md:items-center md:text-xl md:mb-6 mb-4">
        <label htmlFor="name" className="sm:basis-40 ml-[0.5rem] md:ml-0">
          First Name
        </label>
        <input
          defaultValue={userName}
          className="input"
          name="customer"
          type="text"
          id="name"
          required
        />
      </div>
      <div className="flex flex-col mb-4  gap-2 md:flex-row md:items-center md:text-xl md:mb-6">
        <label htmlFor="phone" className="sm:basis-40 ml-[0.5rem] md:ml-0">
          Phone
        </label>
        <div className="grow w-full">
          <input
            className="input"
            name="phone"
            type="tel"
            id="phone"
            required
          />
          {errorsIfAny?.phone && (
            <p className="rounded-md mt-2 font-bold md:font-semibold text-xs text-red-500 bg-red-200 md:text-base px-2 py-2">
              {errorsIfAny.phone}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col mb-4  gap-2 md:flex-row md:items-center md:text-xl md:mb-6">
        <label htmlFor="address" className="sm:basis-40 ml-[0.5rem] md:ml-0">
          Address
        </label>
        <input
          className="input"
          name="address"
          type="text"
          id="address"
          required
        />
      </div>
      <div className="flex items-center gap-4 mb-12 font-semibold">
        <input
          className="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
          name="priority"
          type="checkbox"
          id="priority"
          value={givePriority}
          onChange={(e) => setGivePriority(e.target.checked)}
        />
        <label htmlFor="priority">Want us to give your order a priority?</label>
      </div>
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <Button type="primary" disabled={isSubmitting}>
        {isSubmitting
          ? "processing..."
          : `Order Now for ${totalCartValue + priorityPrice}`}
      </Button>
    </Form>
  );
}

async function orderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); //formData returns an entry that needs to be converted to object that mekes it easier to work with it

  const errorObj = {};
  if (!isValidPhone(data.phone)) {
    //checking if the provided mobile number is valid or not
    errorObj.phone =
      "Provide a Valid Mobile Number. We might need it to Contact you Later.";
    return errorObj;
  }

  const order = {
    ...data,
    priority: data.priority === "true",
    cart: JSON.parse(data.cart),
  };

  const newOrderData = await createNewOrder(order); //newOrderData returned from the api after making the order

  store.dispatch(clearCart()); //NOTE: use it scarcily

  return redirect(`/order/${newOrderData.id}`); //as we can not use navigate hook we will use redirect() to create a response
}

export { orderAction };
export default Createorder;
