import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserAccess,
  fetchUserLogin,
  fetchUserLogout,
} from "../actions/authActions";
import { RootState } from "../store";

type AuthUserType = {
  name: string;
  username: string;
  role: "Admin" | "User";
};

interface AuthState {
  user: AuthUserType | null;
  rejectReason: string | null;
}

const initialState: AuthState = {
  user: null,
  rejectReason: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    //* Login
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.rejectReason = null;
    });

    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.user = {
        name: action.payload.name,
        username: action.payload.username,
        role: action.payload.role,
      };
    });

    builder.addCase(fetchUserLogin.rejected, (state, action) => {
      if (action.error.message) state.rejectReason = action.error.message;
    });

    //* Access
    builder.addCase(fetchUserAccess.fulfilled, (state, action) => {
      state.user = {
        name: action.payload.name,
        username: action.payload.username,
        role: action.payload.role,
      };
    });

    //* Logout
    builder.addCase(fetchUserLogout.fulfilled, (state) => {
      state.user = null;
    });
  },
  reducers: {
    clearRejectReason: (state) => {
      state.rejectReason = null;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { clearRejectReason: authClearRejectReason } = authSlice.actions;

export const authSelectors = {
  user: (state: RootState) => {
    return state.auth.user;
  },
  rejectReason: (state: RootState) => {
    return state.auth.rejectReason;
  },
};
