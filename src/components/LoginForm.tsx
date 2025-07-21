// components/LoginForm.tsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestMagicLinkThunk } from "../features/auth/authSlice";
import { RootState, AppDispatch } from "../app/store";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"customer" | "admin" | "super_admin">(
    "customer"
  );
  const dispatch = useDispatch<AppDispatch>();
  const { status, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(requestMagicLinkThunk({ email, role }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value as any)}>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
        <option value="super_admin">Super Admin</option>
      </select>
      <button type="submit" disabled={status === "loading"}>
        Send Magic Link
      </button>
      {status === "failed" && <p style={{ color: "red" }}>{error}</p>}
      {status === "succeeded" && <p>Magic link sent successfully!</p>}
    </form>
  );
}
