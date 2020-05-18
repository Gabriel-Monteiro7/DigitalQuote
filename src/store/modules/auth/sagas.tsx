import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import { api } from "../../../service/api";
import { singInSuccess, singFailure } from "./actions";
import { Toast } from "react-native-toastjs";

export function* signIn({ payload }: any) {
  try {
    let { user, users, navigation } = payload;
    user = users.filter(
      (value: any) => user.email === value.email && user.senha === value.senha
    )[0];
    console.log(user);

    if (users === null || user !== undefined) {
      let token = user.id;
      yield put(singInSuccess(token, user));

      navigation.navigate("Home");
      return;
    }
    Toast("Usuário não cadastrado").show();
  } catch (erro) {
    console.log(erro);
    yield put(singFailure());
  }
}
// export function singOut() {}
export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  // takeLatest("@auth/SIGN_OUT", singOut),
]);
