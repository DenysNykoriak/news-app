import { useEffect } from "react";
import {
  fetchUserAccess,
  fetchUserLogin,
  fetchUserLogout,
} from "../logic/store/actions/authActions";
import {
  authClearRejectReason,
  authSelectors,
} from "../logic/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useInitAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      dispatch(fetchUserAccess({ access_token }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(authSelectors.user);
  const rejectReason = useAppSelector(authSelectors.rejectReason);

  const login = (username: string, password: string) => {
    dispatch(fetchUserLogin({ username, password }));
  };

  const logout = () => {
    dispatch(fetchUserLogout(null));
  };

  const clearRejectReason = () => {
    dispatch(authClearRejectReason());
  };

  return {
    isAuthorized: Boolean(user),
    user,
    rejectReason,
    login,
    logout,
    clearRejectReason,
  } as const;
};
