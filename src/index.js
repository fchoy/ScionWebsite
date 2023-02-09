import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router";
import App from "./App";
import "./index.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword"
import Errorpage from "./Pages/Errorpage"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement : <Errorpage/>
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement : <Errorpage/>
  },
  {
    path: "/signup",
    element: <Signup/>,
    errorElement : <Errorpage/>
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>,
    errorElement : <Errorpage/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
