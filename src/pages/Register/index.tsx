import React, { useEffect, useState } from "react";
import LogoGoogle from "../../assets/images/googleLogo.jpg";
import Form from "../../components/Form";
import { fields, schema } from "./data";
import firebase from "firebase";
import * as Google from "expo-google-app-auth";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ContainerDefault,
  ContainerFooter,
  Title,
  ContainerBack,
  ButtonBack,
  Back,
} from "./styles";
import { View } from "react-native";

const Logon: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser]: any = useState({});
  return (
    <ContainerDefault>
      <ContainerBack>
        <ButtonBack
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Back name={"angle-left"} />
        </ButtonBack>
      </ContainerBack>
      <Title>REGISTER</Title>
      <Form
        schema={schema}
        fields={fields}
        initialValues={{
          email: "",
          senha: "",
          confirmar_senha: "",
          nome: "",
        }}
        register={true}
      >
        <Container>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
        </Container>
        <ContainerFooter />
      </Form>
    </ContainerDefault>
  );
};

export default Logon;
