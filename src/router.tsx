// src/router.tsx
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import AppLayout from "./layouts/AppLayout"; // shared layout

import { store } from "./app/store";
import LoginForm from "./components/LoginForm";

const isAuthenticated = () => store.getState().auth.isAuthenticated;

export const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated() ? <AppLayout /> : <Navigate to="/login" />,
    children: [{ path: "*", element: <Navigate to="/dashboard" /> }],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);
