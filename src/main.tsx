import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { NotFound } from "./pages/not-found";
import { RegistrationForm } from "./pages/registration-form";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to={"/home"} />, errorElement: <NotFound /> },
  { path: "/home", element: <LandingPage />, errorElement: <NotFound /> },
  {
    path: "/register",
    element: <RegistrationForm />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
