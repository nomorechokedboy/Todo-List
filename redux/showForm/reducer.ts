import { SET_SHOW_FORM } from "./action";

interface ShowFormAction {
  type: string;
  payload: boolean;
}

export default function showFormReducer(state = false, action: ShowFormAction) {
  switch (action.type) {
    case SET_SHOW_FORM:
      return action.payload;
    default:
      return state;
  }
}
