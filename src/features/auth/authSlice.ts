// features/auth/authSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from './types';
import { requestMagicLink } from './authAPI';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

export const requestMagicLinkThunk = createAsyncThunk(
  'auth/requestMagicLink',
  async ({ email, role }: { email: string; role: 'customer' | 'admin' | 'super_admin' }, thunkAPI) => {
    try {
      const response = await requestMagicLink(email, role);
      return response; // structure: { success, message, token }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Request failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ user: User; token: string }>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(requestMagicLinkThunk.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(requestMagicLinkThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Optional: store token or success message
      })
      .addCase(requestMagicLinkThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
