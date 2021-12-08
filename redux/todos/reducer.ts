import { TaskData } from "../../components/shards/TaskForm";
import { ADD_TODOS, DELELTE_TODOS, SET_TODOS, UPDATE_TODOS } from "./action";

interface TodosAction {
  type: string;
  payload: TaskData;
}

export default function todosReducer(
  state: TaskData[] = [],
  action: TodosAction
) {
  switch (action.type) {
    case SET_TODOS:
      return action.payload;
    case ADD_TODOS:
      return [...state, action.payload];
    case UPDATE_TODOS:
      return state.map((task) => {
        if (task._id === action.payload._id)
          return {
            ...task,
            ...action.payload,
          };

        return task;
      });
    case DELELTE_TODOS:
      return state.filter((task) => task._id !== action.payload._id);
    default:
      return state;
  }
}
