import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Cart, ErrorPage, Favorites, Product } from "./pages";
import { ProfileUser } from "./pages/User/ProfileUser";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { AuthComponent } from "./pages/User/AuthComponent/AuthComponent";
import { ProtectedRoute } from "./helpers/ProtectedRoute/ProtectedRoute";
import { ProtectedAuth } from "./helpers/ProtectedRoute/ProtectedAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favoritos",
        element: <Favorites />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfileUser />
          </ProtectedRoute>
        ),
        children: [
          {
            path: ":idsupabase",
            element: <ProfileUser />,
          },
        ],
      },
      {
        path: "login",
        element: (
          <ProtectedAuth>
            <AuthComponent />
          </ProtectedAuth>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
