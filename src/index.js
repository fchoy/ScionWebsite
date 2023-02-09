import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router";
import App from "./App";
import "./index.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
