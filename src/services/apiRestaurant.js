import { baseURL } from "../util";

async function createNewOrder(newOrder) {
  const res = await fetch(`${baseURL}/order`, {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  if (!res.ok) throw Error("Failed Creating your Order");
  const { data } = await res.json();
  return data;
}

export { createNewOrder };
