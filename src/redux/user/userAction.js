import { USER_LOGIN, USER_LOGOUT } from "./userType";

export const userLogin = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};
export const userLogout = (users) => {
  return {
    type: USER_LOGOUT,
  };
};
