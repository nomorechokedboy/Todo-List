import { TaskData } from "../../components/shards/TaskForm";

export const SET_TODOS = "SET_TODOS";
export const ADD_TODOS = "ADD_TODOS";
export const DELELTE_TODOS = "DELELTE_TODOS";
export const UPDATE_TODOS = "UPDATE_TODOS";

export const setTodos = (todos: TaskData[]) => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodos = (todos: TaskData) => ({
  type: ADD_TODOS,
  payload: todos,
});

export const deleteTodos = (todos: TaskData) => ({
  type: DELELTE_TODOS,
  payload: todos,
});

export const updateTodos = (todos: TaskData) => ({
  type: UPDATE_TODOS,
  payload: todos,
});

export const selectTodos = (state) => state.todos;
