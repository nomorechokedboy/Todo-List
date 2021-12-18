import { createStore, combineReducers, applyMiddleware } from "redux";

import todoSearch from "./TodoSearch/reducer";
import loginUserReducer from "./loginUser/reducer";
import isSignupReducer from "./isSignup/reducer";
import showFormReducer from "./showForm/reducer";
import todosReducer from "./todos/reducer";
import isOpenReducer from "./isOpen/reducer";
import isUpdateReducer from "./isUpdate/reducer";

const rootReducer = combineReducers({
  todoSearch,
  isSignup: isSignupReducer,
  loginUser: loginUserReducer,
  showForm: showFormReducer,
  todos: todosReducer,
  isOpen: isOpenReducer,
  isUpdate: isUpdateReducer,
});

export const store = createStore(rootReducer);
