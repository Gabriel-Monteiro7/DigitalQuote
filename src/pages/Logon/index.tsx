import React, { useEffect, useState } from "react";
import LogoGoogle from "../../assets/images/googleLogo.jpg";
import Form from "../../components/Form";
import { fields, schema } from "./data";
import firebase from "firebase";
import * as Google from "expo-google-app-auth";
import { useNavigation } from "@react-navigation/native";

import {
  ButtonGoogle,
  Container,
  ContainerDefault,
  ContainerFooter,
  IconGoogle,
  SingUp,
  SingUpLink,
  TextButtonGoogle,
  Title,
  TextSingUpLink,
} from "./styles";
import { View } from "react-native";

const Logon: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser]: any = useState({});
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "719771779052-6bm8npnc0ajkd89lstjp9efk7rqa9uqu.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  function isUserEqual(googleUser: any, firebaseUser: any) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          return true;
        }
      }
    }
    return false;
  }
  function onSignIn(googleUser: any) {
    let unsubscribe = firebase
      .auth()
      .onAuthStateChanged(function (firebaseUser) {
        unsubscribe();
        if (!isUserEqual(googleUser, firebaseUser)) {
          setUser(googleUser["user"]);
          navigation.navigate("Home", googleUser["user"]);
        } else {
          console.log("User already signed-in Firebase.");
        }
      });
  }
  return (
    <ContainerDefault>
      <Title>LOGIN</Title>
      <Form
        schema={schema}
        fields={fields}
        initialValues={{
          email: "",
          senha: "",
        }}
        register={false}
      >
        <Container>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SingUp>Não possui conta? </SingUp>
            <SingUpLink
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <TextSingUpLink> Cadastre-se</TextSingUpLink>
            </SingUpLink>
          </View>
          <ButtonGoogle
            onPress={() => {
              signInWithGoogleAsync();
            }}
          >
            <IconGoogle source={LogoGoogle} />
            <TextButtonGoogle>Ou entre com o Google</TextButtonGoogle>
          </ButtonGoogle>
        </Container>
        <ContainerFooter />
      </Form>
    </ContainerDefault>
  );
};

export default Logon;
