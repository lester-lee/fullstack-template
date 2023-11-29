import React from "react";
import ReactDOM from "react-dom/client";
import StartScreen from "./features/Components/StartScreen.jsx";
import CashRegister from "./features/Components/CashRegister.jsx";


import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

//import AuthForm from "./features/auth/AuthForm";

import Root from "./layout/Root.jsx";
import StartScreen from "./features/Components/StartScreen";
import CalculatedChangeRender from "./features/Components/CalculatedChangeRender.jsx";
import CashRegister from "./features/Components/CashRegister";
import ReceivedBills from "./features/Components/ReceivedBills";
import ReceivedCoins from "./features/Components/ReceivedCoins";
import TotalChange from "./features/Components/TotalChange";
import Completed from "./features/Components/Completed";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <StartScreen /> },
      { path: "/products", element: <CashRegister /> },
      { path: "/start", element: <StartScreen /> },
      { path: "/", element: <StartScreen /> },
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
