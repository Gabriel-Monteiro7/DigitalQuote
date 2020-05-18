import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import { AsyncStorage } from "react-native";
if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: "YourFilms",
      port: 9090,
      host: "localhost",
    })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();
  tron.clear();

  console.tron = tron;
}
