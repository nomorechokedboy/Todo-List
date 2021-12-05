import { createStore, combineReducers, applyMiddleware } from "redux";

import { todoSearch } from "./TodoSearch/reducer";
import { authReducer } from "./auth/reducer";
import { isSignupReducer } from "./signupState/reducer";
import { loginUserReducer } from "./loginUser/reducer";

const rootReducer = combineReducers({
  todoSearch,
  isSignup: isSignupReducer,
  auth: authReducer,
  loginUser: loginUserReducer,
});

export const store = createStore(rootReducer);
