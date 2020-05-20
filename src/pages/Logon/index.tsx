import React, { useEffect, useState } from "react";
import LogoGoogle from "../../assets/images/googleLogo.jpg";
import Form from "../../components/Form";
import { fields, schema } from "./data";
import * as GoogleSignIn from "expo-google-sign-in";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { singInRequest } from "../../store/modules/auth/actions";
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
import { View, Text, Alert } from "react-native";

const Logon: React.FC = () => {
  const navigation = useNavigation();
  let { user, users } = useSelector((state) => state.user);
  let { signed, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  async function signInWithGoogleAsync() {
    try {
      
      await GoogleSignIn.initAsync({
        clientId:
          "719771779052-j90c4hgdhdtcqid3kedgc9sbpfgdcc51.apps.googleusercontent.com",
      });
      // await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      // await GoogleSignIn.signInSilentlyAsync();
      if (type === "success") {
        dispatch(singInRequest(user, null, navigation));
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
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
        {/* <ContainerFooter /> */}
      </Form>
    </ContainerDefault>
  );
};

export default Logon;
