import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: "Digital Quote",
      storage: AsyncStorage,
      whitelist: ["user", "auth"],
    },
    reducers
  );
  return persistedReducer;
};
