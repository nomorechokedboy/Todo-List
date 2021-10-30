import { createStore, combineReducers, applyMiddleware } from "redux";

import { todoSearch } from "./TodoSearch/reducer";
import { isSignup } from "./SignupState/reducer";
import { signupUser } from "./signup/reducer";

const rootReducer = combineReducers({
  todoSearch,
  isSignup,
  signupUser,
});

export const store = createStore(rootReducer);
