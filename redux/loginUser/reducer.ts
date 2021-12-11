import { SET_LOGIN_USER, PayLoad } from "./action";
import { getStorageWithExpiry } from "../../lib/utils";

interface authAction {
  type: string;
  payload: PayLoad;
}

// check if we are in browser or server 'cause server doesn't have localStorage
const auth_token =
  typeof window !== "undefined" ? getStorageWithExpiry("token") : null;

const default_payload: PayLoad = {
  token: auth_token,
  setLocal: false,
};

export default function authReducer(
  payload = default_payload,
  action: authAction
) {
  switch (action.type) {
    case SET_LOGIN_USER:
      return action.payload;
    default:
      return payload;
  }
}
