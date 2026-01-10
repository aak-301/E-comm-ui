export type UserRole = "super_admin" | "admin" | "customer";
export type UserStatus = "pending" | "active" | "suspended" | "rejected";
// features/auth/types.ts

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  created_at: Date;
  updated_at: Date;
  // Onboarding fields
  onboarded_by?: string;
  onboarded_at?: Date;
  rejection_reason?: string;
  notes?: string;
  // Soft delete fields
  deleted_at?: Date;
  deletion_reason?: string;
  deleted_by?: string;
}
