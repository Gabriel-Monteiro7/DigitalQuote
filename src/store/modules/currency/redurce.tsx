import produce from "immer";
const INITIAL_STATE = {
  films: [],
  film: {},
  favorite: [],
  video: "",
};

export default function user(state = INITIAL_STATE, action: any) {
  return produce(state, (draft) => {
    let { payload } = action;
    switch (action.type) {
      case "@films/SET_VIDEO_REQUEST":
        break;
      case "@films/SET_VIDEO_SUCCESS":
        draft.video = payload.video;
        break;
      default:
    }
  });
}
