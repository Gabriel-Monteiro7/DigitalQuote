import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React, { useEffect, useState } from "react";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import firebase from "firebase";
import ENV from "./env.json";
import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Black": require("./src/assets/fonts/Lato/Lato-Black.ttf"),
    "Lato-Bold": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-Regular": require("./src/assets/fonts/Lato/Lato-Regular.ttf"),
    "Lato-Light": require("./src/assets/fonts/Lato/Lato-Light.ttf"),
    "Lato-Thin": require("./src/assets/fonts/Lato/Lato-Thin.ttf"),
  });
  function logar() {
    firebase.auth().onAuthStateChanged((value) => {});
  }
  
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(ENV.FIREBASE_CONFIG);
    }
  }, []);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        {/* <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
            setUser({});
          }}
        >
          <Text>Sair</Text>
        </TouchableOpacity> */}
        <Routes />
      </>
    );
  }
}
