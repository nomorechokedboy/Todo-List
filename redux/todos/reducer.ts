import { TaskData } from "../../components/shards/TaskForm";
import { SET_TODOS } from "./action";

interface TodosAction {
  type: string;
  payload: TaskData;
}

export default function todosReducer(state = [], action: TodosAction) {
  switch (action.type) {
    case SET_TODOS:
      return [...state, action.payload];
    default:
      return state;
  }
}
