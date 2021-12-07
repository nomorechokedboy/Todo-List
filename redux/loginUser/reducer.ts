import { SET_LOGIN_USER } from "./action";

interface loginUserAction {
  type: string;
  payload: string;
}
export const loginUserReducer = (token = null, action: loginUserAction) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return action.payload;
    default:
      return token;
  }
};
