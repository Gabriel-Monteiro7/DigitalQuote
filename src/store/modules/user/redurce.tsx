import produce from "immer";
import { moveScreen } from "../../../util";
const INITIAL_STATE = {
  user: {},
  users: [],
};

export default function user(state = INITIAL_STATE, action: any) {
  return produce(state, (draft) => {
    let { payload } = action;
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS":
        draft.user = payload.user;
        break;
      case "@auth/SIGN_OUT": {
        draft.user = {};
        break;
      }
      case "@user/ADD_USER_REQUEST":
        break;
      case "@user/ADD_USER_SUCCESS":
        draft.users.push(payload.user);
        break;
      default:
    }
  });
}
