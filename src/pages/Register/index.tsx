import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import { fields, schema } from "./data";
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

const Register: React.FC = () => {
  const navigation = useNavigation();
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
          firstName: "",
          lastName: "",
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
        {/* <ContainerFooter /> */}
      </Form>
    </ContainerDefault>
  );
};

export default Register;
