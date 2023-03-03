import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import "bulma/css/bulma.min.css";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import WaiterView from "./pages/waiterView/WaiterView";
import Frontend from "./components/Frontend";
import Orders from "./pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/waiter-view",
        element: <WaiterView />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>
);
