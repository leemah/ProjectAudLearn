import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpUser, loginUser, logoutUser } from "../../services/authService";

// Async action for signing up
export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      await signUpUser(email, password, role);
      return { email, role }; // Pass full user object if needed
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginUser(email, password);
      return { user: response.user, role: response.role }; // Return user data on successful login
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// Async action for logging out
export const logout = createAsyncThunk("auth/logout", async () => {
  await logoutUser();
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    role: null,
    loading: false,
    error: null,
  },
  reducers: {
    // logout: (state) => {
    //   state.user = null; // Clear user data on logout
    // },
  },
  extraReducers: (builder) => {
    builder
      // Sign Up
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.email;
        state.role = action.payload.role;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture the error message
      })

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture the error message
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.role = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
