import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import "bulma/css/bulma.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import WaiterView from "./pages/waiterView/WaiterView";
import Frontend from "./components/Frontend";

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
        index: "/waiter-view",
        element: <WaiterView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>
);
