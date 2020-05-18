import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Logon from "../pages/Logon";
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function Routes({ signed }:any) {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {signed ? (
          <>
            <AppStack.Screen name={"Home"} component={Home} />
          </>
        ) : (
          <>
            <AppStack.Screen name={"Logon"} component={Logon} />
            <AppStack.Screen name={"Register"} component={Register} />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
