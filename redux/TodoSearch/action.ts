export const SET_TODO_SEARCH = "SET_TODO_SEARCH";

export const setTodoSearch = (todoSearch: string) => ({
  type: SET_TODO_SEARCH,
  payload: todoSearch,
});

export const selectTodoSearch = (state: any) => state.todoSearch;
