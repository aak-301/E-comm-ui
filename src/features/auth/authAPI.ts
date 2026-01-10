// features/auth/authAPI.ts
import axios from "axios";

export const requestMagicLink = async (
  email: string,
  role: "customer" | "admin" | "super_admin"
) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_BASE_URL}/auth/request-magic-link`,
    {
      email,
      role,
    }
  );
  return response.data; // expect { success: true, message: "...", token?: "..." }
};
