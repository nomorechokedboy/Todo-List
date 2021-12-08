export const SET_IS_OPEN = "SET_IS_OPEN";

export const setIsOpen = (isOpen: boolean) => ({
  type: SET_IS_OPEN,
  payload: isOpen,
});

export const selectIsOpen = (state) => state.isOpen;
