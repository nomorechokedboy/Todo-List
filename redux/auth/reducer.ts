import { SET_AUTH } from "./action";
import { getStorageWithExpiry } from "../../lib/utils";

interface authAction {
  type: string;
  payload: string;
}

// check if we are in browser or server 'cause server doesn't have localStorage
const auth_token =
  typeof window !== "undefined" ? getStorageWithExpiry("token") : null;

export const authReducer = (token = auth_token, action: authAction) => {
  switch (action.type) {
    case SET_AUTH:
      return action.payload;
    default:
      return token;
  }
};
