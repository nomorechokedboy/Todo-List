import { SET_SHOW_FORM } from "./action";

export interface BooleanAction {
  type: string;
  payload: boolean;
}

export default function showFormReducer(state = false, action: BooleanAction) {
  switch (action.type) {
    case SET_SHOW_FORM:
      return action.payload;
    default:
      return state;
  }
}
