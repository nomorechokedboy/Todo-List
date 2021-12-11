import { SET_TODO_SEARCH } from "./action";

interface TodoSearchAction {
  type: string;
  payload: string;
}

export default function todoSearch(state = "", action: TodoSearchAction) {
  switch (action.type) {
    case SET_TODO_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
