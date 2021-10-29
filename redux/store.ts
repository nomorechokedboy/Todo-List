import { createStore, combineReducers, applyMiddleware } from "redux";

import { todoSearch } from "./TodoSearch/reducer";

const rootReducer = combineReducers({
  todoSearch,
});

export const store = createStore(rootReducer);
