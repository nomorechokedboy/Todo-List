import { setStorageWithExpiry } from "../../lib/utils";

export const SET_LOGIN_USER = "SET_LOGIN_USER";

export interface PayLoad {
  token: string;
  setLocal: boolean;
}

export const setLoginUser = (payload: PayLoad) => {
  if (payload.setLocal) {
    const ttl = 604_800_000; // 7 days
    setStorageWithExpiry("token", payload.token, ttl);
  }

  return {
    type: SET_LOGIN_USER,
    payload,
  };
};

export const selectLoginUser = (state: any) => state.loginUser;
