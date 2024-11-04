import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createNewOrder } from "../../services/apiRestaurant";

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
    <Form method="post">
      <div>
        <label htmlFor="name">First Name</label>
        <input
          className="input"
          name="customer"
          type="text"
          id="name"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input className="input" name="phone" type="tel" id="phone" required />
        {errorsIfAny?.phone && <p>{errorsIfAny.phone}</p>}
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          className="input"
          name="address"
          type="text"
          id="address"
          required
        />
      </div>
      <div>
        <input
          className="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
          name="priority"
          type="checkbox"
          id="priority"
        />
        <label htmlFor="priority">Want to give your order priority?</label>
      </div>

      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <button
        disabled={isSubmitting}
        className="bg-yellow-400 rounded-full py-2 px-4 uppercase font-bold text-sm hover:bg-yellow-300 transition-colors duration-300 focus:ring  focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-300 focus:outline-none "
      >
        {isSubmitting ? "processing..." : "Order Now"}
      </button>
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
