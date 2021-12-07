import { TaskData } from "../../components/shards/TaskForm";

export const SET_TODOS = "SET_TODOS";

export const setTodos = (todos: TaskData) => ({
  type: SET_TODOS,
  payload: todos,
});

export const selectTodos = (state) => state.todos;
