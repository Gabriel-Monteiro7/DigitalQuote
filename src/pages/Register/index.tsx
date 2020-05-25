import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Form from "../../components/Form";
import { fields, schema } from "./data";
import { Back, ButtonBack, Container, ContainerBack, ContainerDefault, Title } from "./styles";


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
