import produce from "immer";
const INITIAL_STATE: any = {
  user: {},
  users: [],
};

export default function user(state = INITIAL_STATE, action: any) {
  return produce(state, (draft: any) => {
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
