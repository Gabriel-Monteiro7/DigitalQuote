export function singInRequest(user: any,users:any,navigation:any) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { user,users,navigation },
  };
}
export function singInSuccess(token: any, user: any) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user },
  };
}
export function singFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}
export function singOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
