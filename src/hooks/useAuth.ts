import { useEffect } from "react";
import { users } from "../data/users";
import {
  authLogin,
  authLogout,
  authSelectors,
} from "../logic/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useInitAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      //* Request to backend
      const user = users.find((user) => user.access_token === access_token);
      //* -

      if (!user) return localStorage.removeItem("access_token");

      dispatch(
        authLogin({
          name: user.name,
          username: user.username,
          role: user.role,
        })
      );
    }
  });
};

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector(authSelectors.authState);

  const logout = () => {
    localStorage.removeItem("access_token");
    dispatch(authLogout);
  };

  const login = (username: string, password: string) => {
    //* Request to backend
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    //* -

    if (!user)
      return {
        success: false as const,
        message: "Username or password entered incorrectly",
      };

    localStorage.setItem("access_token", user.access_token);
    dispatch(
      authLogin({
        name: user.name,
        username: user.username,
        role: user.role,
      })
    );
  };

  return {
    isAuthorized: authState.isAuthorized,
    user: authState.user,
    login,
    logout,
  } as const;
};
