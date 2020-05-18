export function addUserRequest(user:any,users:any,navigation:any) {
  return {
    type: "@user/ADD_USER_REQUEST",
    payload: { user,users,navigation }
  };
}
export function addUserSuccess(user:any) {
  return {
    type: "@user/ADD_USER_SUCCESS",
    payload: { user }
  };
}
