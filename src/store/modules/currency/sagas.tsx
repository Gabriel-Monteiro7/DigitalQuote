import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import ENV from "../../../../env.json";
// import history from "../../../service/history";
import { Toast } from "react-native-toastjs";

import { api } from "../../../service/api";
import { variationDaily } from "../../../util";
import { getCurrenciesSuccess, setCurrencySuccess } from "./actions";
export function* getCurrencies({ payload }: any) {
  try {
    const {} = payload;
    let { data } = yield call(api.get, "/all");
    yield put(getCurrenciesSuccess(Object.values(data)));
  } catch (erro) {
    Toast("Erro na requisição").show();

    console.log(erro);
  }
}
export function* setCurrency({ payload }: any) {
  try {
    const { currency, navigation } = payload;
    yield put(setCurrencySuccess(currency));
    navigation.navigate("Description");
  } catch (erro) {
    Toast("Erro na requisição").show();

    console.log(erro);
  }
}
export default all([
  takeLatest("@currency/GET_CURRENCIES_REQUEST", getCurrencies),
  takeLatest("@currency/SET_CURRENCY_REQUEST", setCurrency),
]);
