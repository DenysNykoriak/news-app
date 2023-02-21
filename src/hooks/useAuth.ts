import { useEffect } from "react";
import {
  fetchUserAccess,
  fetchUserLogin,
  fetchUserLogout,
} from "../logic/store/actions/authActions";
import {
  authClearRejectReason,
  authSelectors,
  authSetAsChecked,
} from "../logic/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useInitAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      dispatch(fetchUserAccess({ access_token })).then(() => {
        dispatch(authSetAsChecked());
      });
      return;
    }

    dispatch(authSetAsChecked());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { user, rejectReason, checkingAuth } = useAppSelector(
    authSelectors.full
  );

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
    checkingAuth,
    user,
    rejectReason,
    login,
    logout,
    clearRejectReason,
  } as const;
};
