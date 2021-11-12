import { createStore, combineReducers, applyMiddleware } from "redux";

import { todoSearch } from "./TodoSearch/reducer";
import { authReducer } from "./auth/reducer";
import { isSignupReducer } from "./signupState/reducer";

const rootReducer = combineReducers({
  todoSearch,
  isSignup: isSignupReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer);
