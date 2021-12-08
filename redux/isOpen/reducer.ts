import { BooleanAction } from "../showForm/reducer";
import { SET_IS_OPEN } from "./action";

export default function isOpenReducerReducer(
  state = false,
  action: BooleanAction
) {
  switch (action.type) {
    case SET_IS_OPEN:
      return action.payload;
    default:
      return state;
  }
}
