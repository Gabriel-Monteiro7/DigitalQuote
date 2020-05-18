import { combineReducers } from "redux";
import auth from "./auth/redurce";
import user from "./user/redurce";
import currency from "./currency/redurce";

const reducers = combineReducers({
  auth,
  user,
  currency,
});

export default reducers;
