export function getCurrencyRequest() {
  return {
    type: "@currency/GET_CURRENCY_REQUEST",
    payload: {},
  };
}
export function getCurrencySuccess(currencies: any) {
  return {
    type: "@currency/GET_CURRENCY_SUCCESS",
    payload: { currencies },
  };
}
