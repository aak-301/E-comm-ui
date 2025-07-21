// features/auth/authAPI.ts
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/auth";

export const requestMagicLink = async (
  email: string,
  role: "customer" | "admin" | "super_admin"
) => {
  const response = await axios.post(`${BASE_URL}/request-magic-link`, {
    email,
    role,
  });
  return response.data; // expect { success: true, message: "...", token?: "..." }
};
