import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { NotFound } from "./pages/not-found";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
