import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type UserType = {
  name: string;
};

interface AuthState {
  user: UserType | null;
  isAuthorized: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthorized = false;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { login: authLogin, logout: authLogout } = authSlice.actions;
export const authSelectors = {
  user: (state: RootState) => {
    return state.auth.user;
  },
  isAuthorized: (state: RootState) => {
    return state.auth.isAuthorized;
  },
};
