import { baseURL } from "../util";

async function createNewOrder(newOrder) {
  const res = await fetch(`${baseURL}/order`, {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw Error("Failed Creating your Order");
  const { data } = await res.json();
  return data;
}

async function updateOrder(id, updatedItem) {
  const res = await fetch(`${baseURL}/order/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedItem),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Could not update your order");
}
export { createNewOrder, updateOrder };
