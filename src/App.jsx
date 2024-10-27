import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import { menuLoader } from "./features/menu/Menu";
import Createorder, { orderAction } from "./features/order/Createorder";
import Order, { orderLoader } from "./features/order/Order";
import Applayout from "./ui/Applayout";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />, //NOTE: will deal with error that gets bubbled up by children or the error that occurs in the whole parent component, mostly the route not matched error
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />, // NOTE: if we don't define the errorElement here the error will get bubbled up to parent, but if we define the error element here that element will get render here
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <Createorder />,
        action: orderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
