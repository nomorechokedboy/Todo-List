export const SET_IS_UPDATE = "SET_IS_UPDATE";

export const setIsUpdate = (isUpdate: boolean) => ({
  type: SET_IS_UPDATE,
  payload: isUpdate,
});

export const selectIsUpdate = (state) => state.isUpdate;
