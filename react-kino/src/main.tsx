import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import SearchOfMovies from "./pages/SearchOfMovies/SearchOfMovies";
import { Favofites } from "./pages/Favofites/Favofites";
import { ErrorSection } from "./pages/Error/ErrorSection";
import { FilmCard } from "./pages/FilmCard/FilmCard";
import Layout from "./layout/Layout/Layout";
import { RequireAuth } from "./helpers/RequireAuth";
import AuthLayout from "./layout/Auth/AuthLayout";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <SearchOfMovies />,
      },
      {
        path: "/favorites",
        element: <Favofites />,
      },
      {
        path: "/movie/:tt",
        element: <FilmCard />,
      },
      {
        path: "*",
        element: <ErrorSection />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Authorization />,
      },
    ],
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
