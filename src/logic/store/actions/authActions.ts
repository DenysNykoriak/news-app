import { createAsyncThunk } from "@reduxjs/toolkit";
import { BackendUserType, users } from "../../../data/users";
import i18n from "./../../i18n";

type UserLoginArgType = { username: string; password: string };

type UserAccessArgType = { access_token: string };

export const fetchUserLogin = createAsyncThunk<
  BackendUserType,
  UserLoginArgType
>("auth/fetchUserLogin", ({ username, password }) => {
  return new Promise<BackendUserType>((resolve, reject) => {
    //* Request to backend
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    //* -
    if (user) return resolve(user);

    reject(
      i18n.t(
        "Dialogs.invalidFields",
        "Username or password entered incorrectly"
      )
    );
  })
    .then((user) => {
      localStorage.setItem("access_token", user.access_token);

      return user;
    })
    .catch((reason) => {
      throw new Error(reason);
    });
});

export const fetchUserAccess = createAsyncThunk<
  BackendUserType,
  UserAccessArgType
>("auth/fetchUserAccess", ({ access_token }) => {
  return new Promise<BackendUserType>((resolve, reject) => {
    //* Request to backend
    const user = users.find((user) => user.access_token === access_token);
    //* -
    if (user) return resolve(user);

    reject("Token not found!");
  }).catch((reason) => {
    localStorage.removeItem("access_token");

    throw new Error(reason);
  });
});

export const fetchUserLogout = createAsyncThunk<true, unknown>(
  "auth/fetchUserLogout",
  () => {
    return new Promise<true>((resolve) => {
      resolve(true);
    }).then((result) => {
      localStorage.removeItem("access_token");

      return result;
    });
  }
);
