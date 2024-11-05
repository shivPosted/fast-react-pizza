import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createNewOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    //test method on regexexpression returns a boolean by checking the passesd string
    str,
  );
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Createorder() {
  const errorsIfAny = useActionData();
  console.log(errorsIfAny);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = fakeCart;

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
            <p className="rounded-md mt-2 font-bold md:font-semibold text-xs text-red-500 bg-red-200 md:text-base px-2 py-1">
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
        />
        <label htmlFor="priority">Want us to give your order a priority?</label>
      </div>
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <Button type="primary" disabled={isSubmitting}>
        {isSubmitting ? "processing..." : "Order Now"}
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
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  const newOrderData = await createNewOrder(order); //newOrderData returned from the api after making the order

  return redirect(`/order/${newOrderData.id}`); //as we can not use navigate hook we will use redirect() to create a response
}

export { orderAction };
export default Createorder;
