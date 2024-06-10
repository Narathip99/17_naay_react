import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Rounter
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Owner from "./pages/Owner.jsx";
import { Layout } from "antd";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/owner",
        element: <Owner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rounter} />
  </React.StrictMode>
);
