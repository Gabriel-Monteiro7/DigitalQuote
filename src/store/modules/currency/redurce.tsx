import produce from "immer";
const INITIAL_STATE: any = {
  currencies: [],
  currency: {},
};

export default function currency(state = INITIAL_STATE, action: any) {
  return produce(state, (draft: any) => {
    let { payload } = action;
    switch (action.type) {
      case "@currency/GET_CURRENCY_REQUEST":
        break;
      case "@currency/GET_CURRENCY_SUCCESS":
        draft.currencies = payload.currencies;
        break;
      default:
    }
  });
}
