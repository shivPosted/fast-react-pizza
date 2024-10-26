// Test ID: IIDSAT

import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import {
  minutesLeft,
  currencyFormatter,
  dateFormatter,
  baseURL,
} from "../../util.js";

const order = {
  id: "ABCDEF",
  customer: "Shiv",
  phone: "123456789",
  address: "Kalwar Road, Jaipur, 302012",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { data: order } = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = minutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${minutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {dateFormatter(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {currencyFormatter(orderPrice)}</p>
        {priority && <p>Price priority: {currencyFormatter(priorityPrice)}</p>}
        <p>
          To pay on delivery: {currencyFormatter(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

async function orderLoader({ params }) {
  const { orderId } = params;
  const res = await fetch(`${baseURL}/order/${orderId}`);
  if (!res.ok) throw new Error(`Could not find order#${orderId}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export { orderLoader };
export default Order;
