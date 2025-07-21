// src/layouts/AppLayout.tsx
import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
