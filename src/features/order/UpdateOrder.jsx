import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function updateOrderAction({ params }) {
  const { orderId } = params;
  const item = { priority: true };
  await updateOrder(orderId, item);
}

export default UpdateOrder;
