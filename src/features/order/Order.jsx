// Test ID: IIDSAT

import {
  useFetcher,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import {
  minutesLeft,
  currencyFormatter,
  dateFormatter,
  baseURL,
} from "../../util.js";
import OrderItem from "./OrderItem.jsx";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder.jsx";

// const order = {
//   id: "ABCDEF",
//   customer: "Shiv",
//   phone: "123456789",
//   address: "Kalwar Road, Jaipur, 302012",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { data: order } = useLoaderData();
  //NOTE:  this hook is used to get the data out of the loader data of another route it also has several other properties like state
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu"); //loads data associated with the '/menu' route loader ---- fetcher.state = 'idle' | 'submitting' | 'loading'
  }, [fetcher]);
  const {
    id,
    status,
    priority,
    priorityPrice, //NOTE: it is coming from backend
    orderPrice,
    estimatedDelivery,
  } = order;

  const deliveryIn = minutesLeft(estimatedDelivery);

  return (
    <div className="py-2 px-4 space-y-6 md:py-8 ">
      <div className="flex flex-wrap gap-x-4 justify-between">
        <h2 className="font-bold mb-2 md:text-xl">Order #{id} status</h2>

        <div className="space-x-2 uppercase">
          {priority && (
            <span className="text-stone-50 bg-red-500 rounded-full py-1 px-3  text-sm">
              Priority
            </span>
          )}
          <span className="text-stone-50 bg-green-500 rounded-full py-1 px-3  text-sm">
            {status} order
          </span>
        </div>
      </div>
      <ul className="divide divide-y divide-stone-300 border border-y-stone-300">
        {order.cart.map((item) => (
          <OrderItem
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher.data?.find((obj) => obj.id === item.pizzaId)
                .ingredients || []
            }
            item={item}
            key={item.pizzaId}
          />
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-4 justify-between bg-stone-300 p-4 rounded-sm">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${minutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm">
          (Estimated delivery: {dateFormatter(estimatedDelivery)})
        </p>
      </div>

      <div className="flex flex-col gap-x-4 justify-between bg-stone-300 p-4 rounded-sm">
        <p className="space-x-2">
          <span>Price pizza:</span>{" "}
          <span> {currencyFormatter(orderPrice)}</span>
        </p>
        {priority && (
          <p className="space-x-2">
            <span>Price priority:</span>{" "}
            <span> {currencyFormatter(priorityPrice)}</span>
          </p>
        )}
        <p className="space-x-2 font-medium">
          <span>To pay on delivery:</span>{" "}
          <span className="font-bold">
            {" "}
            {currencyFormatter(orderPrice + priorityPrice)}
          </span>
        </p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

async function orderLoader({ params }) {
  const { orderId } = params;
  const res = await fetch(`${baseURL}/order/${orderId}`);
  if (!res.ok) throw new Error(`Could not find order#${orderId}`);
  const data = await res.json();
  return data;
}

export { orderLoader };
export default Order;
