// src/router.tsx
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import AppLayout from "./layouts/AppLayout"; // shared layout

import { store } from "./app/store";
import LoginForm from "./components/LoginForm";
import { APP_ROUTES } from "./constants/routes";

const isAuthenticated = () => store.getState().auth.isAuthenticated;

const customerRoutes = [{}];
const adminRoutes = [{}];

const superAdminRoutes = [{}];

const loadingRoutes = [{}];

export const initRouting = (userType: string) => {
  if (!userType) {
    return createBrowserRouter(loadingRoutes);
  }
  if (userType === "customer") {
    return createBrowserRouter(customerRoutes);
  } else if (userType === "admin") {
    return createBrowserRouter(adminRoutes);
  } else if (userType === "super_admin") {
    return createBrowserRouter(superAdminRoutes);
  }
};
