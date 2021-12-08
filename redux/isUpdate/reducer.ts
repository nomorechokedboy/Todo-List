import { BooleanAction } from "../showForm/reducer";
import { SET_IS_UPDATE } from "./action";

export default function isUpdateReducer(state = false, action: BooleanAction) {
  switch (action.type) {
    case SET_IS_UPDATE:
      return action.payload;

    default:
      return state;
  }
}
