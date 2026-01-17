import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/user.context";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import SearchOfMovies from "./pages/SearchOfMovies/SearchOfMovies";
import { Favofites } from "./pages/Favofites/Favofites";
import { ErrorSection } from "./pages/Error/ErrorSection";
import { FilmCard } from "./pages/FilmCard/FilmCard";
import axios from "axios";
import { PREFIX, PREFIX2 } from "./helpers/API";
import Layout from "./layout/Layout/Layout";
import { RequireAuth } from "./helpers/RequireAuth";
import AuthLayout from "./layout/Auth/AuthLayout";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    loader: async ({ params }) => {
      const data = await axios.get(`${PREFIX}/?q=${params}`);
      return data;
    },
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
        loader: async ({ params }) => {
          const data2 = await axios.get(`${PREFIX2}/movie/?tt=${params.tt}`);
          return data2;
        },
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
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
