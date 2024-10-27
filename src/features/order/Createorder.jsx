import { Form, redirect, useActionData } from "react-router-dom";
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
  const data = useActionData();
  const cart = fakeCart;

  return (
    <Form method="post">
      <div>
        <label htmlFor="name">First Name</label>
        <input name="customer" type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input name="phone" type="tel" id="phone" required />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input name="address" type="text" id="address" required />
      </div>
      <div>
        <input name="priority" type="checkbox" id="priority" />
        <label htmlFor="priority">Want to give your order priority?</label>
      </div>

      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <button>Order Now</button>
    </Form>
  );
}

async function orderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); //formData returns an entry that needs to be converted to object that mekes it easier to work with it
  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  const newOrderData = await createNewOrder(order);

  return redirect(`/order/${newOrderData.id}`);
}

export { orderAction };
export default Createorder;
