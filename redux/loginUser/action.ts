export const SET_LOGIN_USER = "SET_LOGIN_USER";

export const setLoginUser = (token: string) => {
  return {
    type: SET_LOGIN_USER,
    payload: token,
  };
};

export const selectLoginUser = (state: any) => state.loginUser;
