import { SET_IS_SIGNUP } from "./action";

interface IsSignupAction {
  type: string;
  payload: boolean;
}

export default function isSignupReducer(
  isSignup = false,
  action: IsSignupAction
) {
  switch (action.type) {
    case SET_IS_SIGNUP:
      return action.payload;
    default:
      return isSignup;
  }
}
