import { SET_AUTH } from "./action";

interface authAction {
  type: string;
  payload: string;
}
const auth_token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const authReducer = (token = auth_token, action: authAction) => {
  switch (action.type) {
    case SET_AUTH:
      return action.payload;
    default:
      return token;
  }
};
