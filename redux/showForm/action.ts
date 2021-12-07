export const SET_SHOW_FORM = "SET_SHOW_FORM";

export const setShowForm = (showForm: boolean) => ({
  type: SET_SHOW_FORM,
  payload: showForm,
});

export const selectShowForm = (state) => state.showForm;
