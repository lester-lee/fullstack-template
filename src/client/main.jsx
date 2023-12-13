import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";

//import AuthForm from "./features/auth/AuthForm";

import Root from "./Root/Root.jsx";
import StartScreen from "./features/StartScreen/StartScreen.jsx";
import Login from "./features/UserAccounts/Login";
import Register from "./features/UserAccounts/UserRegistration";
import CashRegister from "./features/CashRegister/CashRegister";
import ReceivedBills from "./features/DenominationsReceived/ReceivedBills";
import ReceivedCoins from "./features/DenominationsReceived/ReceivedCoins";
import IncrementalRendering from "./features/DenominationsToGive/IncrementalRendering.jsx";
import TotalChange from "./features/DenominationsToGive/TotalChange";
import Completed from "./features/DenominationsToGive/Completed";
import ErrorPage from "./features/Errors/ErrorPage";
import EditUserStore from "./features/UserAccounts/EditUserStore";
import ProductDetails from "./features/UserAccounts/ProductDetails.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <StartScreen /> },
      { path: "/products", element: <CashRegister /> },
      { path: "/start", element: <StartScreen /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/received-bills", element: <ReceivedBills /> },
      { path: "/received-coins", element: <ReceivedCoins /> },
      { path: "/change", element: <IncrementalRendering /> },
      { path: "/total-change", element: <TotalChange /> },
      { path: "/completed", element: <Completed /> },
      { path: "/edit", element: <EditUserStore /> },
      { path: "/edit/:id", element: <ProductDetails /> },
      { path: "*", element: <ErrorPage /> },
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
