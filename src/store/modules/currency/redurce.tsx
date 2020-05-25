import produce from "immer";
const INITIAL_STATE: any = {
  currencies: [],
  currency: {},
};

export default function currency(state = INITIAL_STATE, action: any) {
  return produce(state, (draft: any) => {
    let { payload } = action;
    switch (action.type) {
      case "@currency/GET_CURRENCIES_REQUEST":
        break;
      case "@currency/GET_CURRENCIES_SUCCESS":
        draft.currencies = payload.currencies;
        break;
      case "@currency/SET_CURRENCY_REQUEST":
        break;
      case "@currency/SET_CURRENCY_SUCCESS":
        draft.currency = payload.currency;
        break;
      default:
    }
  });
}
