// features/auth/types.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin' | 'super_admin';
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
