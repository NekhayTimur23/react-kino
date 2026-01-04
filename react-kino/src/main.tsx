import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/user.context";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Authorization from "./pages/Authorization/Authorization";
import SearchOfMovies from "./pages/SearchOfMovies/SearchOfMovies";
import { Favofites } from "./pages/Favofites/Favofites";
import { ErrorSection } from "./pages/Error/ErrorSection";
import { FilmCard } from "./pages/FilmCard/FilmCard";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SearchOfMovies />,
      },
      {
        path: "/login",
        element: <Authorization />,
      },
      {
        path: "/favofites",
        element: <Favofites />,
      },
      {
        path: "/movie/:id",
        element: <FilmCard />,
      },
      {
        path: "*",
        element: <ErrorSection />,
      },
    ],
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
