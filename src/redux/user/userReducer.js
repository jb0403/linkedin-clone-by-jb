import { USER_LOGIN, USER_LOGOUT } from "./userType";

export const userReducer = (state = { user: null }, action) => {
  console.log("log from treducer", action);
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_LOGOUT:
      return {
        user: null,
      };

    default:
      return state;
  }
};
