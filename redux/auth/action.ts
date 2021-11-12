export const SET_AUTH = "SET_AUTH";

export const setAuth = (token: string) => {
  return {
    type: SET_AUTH,
    payload: token,
  };
};

export const selectAuth = (state: any) => state.auth;
