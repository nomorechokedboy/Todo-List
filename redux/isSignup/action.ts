export const SET_IS_SIGNUP = "SET_IS_SIGNUP";

export const setIsSignup = (isSignUp: boolean) => ({
  type: SET_IS_SIGNUP,
  payload: isSignUp,
});

export const selectIsSignup = (state: any) => state.isSignup;
