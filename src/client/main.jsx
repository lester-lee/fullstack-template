import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
//import store from "./store";

//import AuthForm from "./features/auth/AuthForm";

import Root from "./layout/Root.jsx";
import CalculatedChangeRender from "./features/Components/CalculatedChangeRender.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/products", element: <CashRegister /> },
      { path: "/products/:id", element: <SingleProduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
