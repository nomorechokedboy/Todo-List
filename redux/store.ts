import { createStore, combineReducers, applyMiddleware } from "redux";

import { todoSearch } from "./TodoSearch/reducer";
import { authReducer } from "./auth/reducer";
import { isSignupReducer } from "./signupState/reducer";
import showFormReducer from "./showForm/reducer";
import todosReducer from "./todos/reducer";
import { loginUserReducer } from "./loginUser/reducer";
import isOpenReducer from "./isOpen/reducer";
import isUpdateReducer from "./isUpdate/reducer";

const rootReducer = combineReducers({
  todoSearch,
  isSignup: isSignupReducer,
  auth: authReducer,
  showForm: showFormReducer,
  todos: todosReducer,
  loginUser: loginUserReducer,
  isOpen: isOpenReducer,
  isUpdate: isUpdateReducer,
});

export const store = createStore(rootReducer);
