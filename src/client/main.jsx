import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Students from "./features/Students/Students.jsx"
import Root from "./layout/Root.jsx";
import Student from "./features/Students/Student.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Students /> },
      { path: "/tasks", element: <Students /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/students", element: <Students />},
      { path: "/students/:studentID", element: <Student />}
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