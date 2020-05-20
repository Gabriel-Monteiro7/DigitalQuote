import react from "react";
import { takeLatest, call, all, put } from "redux-saga/effects";
import { Toast } from "react-native-toastjs";
import { useNavigation, StackActions } from "@react-navigation/native";
import { api } from "../../../service/api";
import { addUserSuccess } from "./actions";

export function* addUser({ payload }: any) {
  try {
    const { user, users, navigation } = payload;
    if (users.filter((value: any) => user.email === value.email).length === 0) {
      user.uid = users.length;
      user.displayName = user.firstName + " " + user.lastName;
      delete user.confirmar_senha ;
      yield put(addUserSuccess(user));
      navigation.navigate("Logon");
      return;
    }
    Toast("Usuário já cadastrado").show();
  } catch (erro) {
    console.log(erro);
  }
}
export default all([takeLatest("@user/ADD_USER_REQUEST", addUser)]);
