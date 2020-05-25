export function getCurrenciesRequest() {
  return {
    type: "@currency/GET_CURRENCIES_REQUEST",
    payload: {},
  };
}
export function getCurrenciesSuccess(currencies: any) {
  return {
    type: "@currency/GET_CURRENCIES_SUCCESS",
    payload: { currencies },
  };
}
export function setCurrencyRequest(currency: any,navigation:any) {
  return {
    type: "@currency/SET_CURRENCY_REQUEST",
    payload: {currency,navigation},
  };
}
export function setCurrencySuccess(currency: any) {
  return {
    type: "@currency/SET_CURRENCY_SUCCESS",
    payload: { currency },
  };
}
