import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import ENV from "../../../../env.json";
// import history from "../../../service/history";
import { Toast } from "react-native-toastjs";

import { api } from "../../../service/api";
import { variationDaily } from "../../../util";
import { getCurrencySuccess } from "./actions";
export function* getCurrencies({ payload }: any) {
  try {
    const {} = payload;
    let { data } = yield call(api.get, "/all");
    yield put(getCurrencySuccess(Object.values(data)));
  } catch (erro) {
    Toast("Erro na requisição").show();

    console.log(erro);
  }
}

export default all([
  takeLatest("@currency/GET_CURRENCY_REQUEST", getCurrencies),
]);
