import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { useDispatch, useSelector } from "react-redux";
import { singInRequest } from "../../store/modules/auth/actions";
import { addUserRequest } from "../../store/modules/user/actions";
import Input from "../Input";
import {
  ButtonSubmit,
  Container,
  ContainerFormulario,
  ContainerInput,
  ContainerSafe,
  Error,
  TextButton,
} from "./styles";

export default function Form({
  fields,
  schema,
  initialValues,
  rest,
  children,
  register,
}: any) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let { users } = useSelector((state) => state.user);
  return (
    <Container>
      <Formik
        enableReinitialize={false}
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={(values) => {
          if (register) {
            dispatch(addUserRequest(values, users,navigation));
          } else {
            dispatch(singInRequest(values, users,navigation));
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }: any) => (
          <ContainerSafe>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <ContainerFormulario>
                {fields.map((value: any, index: any) => {
                  return (
                    <ContainerInput key={index}>
                      <Input
                        keyboardType={value.keyboardType}
                        {...rest}
                        error={
                          errors[value.name] && touched[value.name]
                            ? true
                            : false
                        }
                        maxLength={value.maxLength}
                        icone={value.icone}
                        placeholder={value.placeHolder}
                        label={value.label}
                        onChangeText={handleChange(value.name)}
                        onBlur={handleBlur(value.name)}
                        value={values[value.name]}
                        password={value.password}
                        name={value.name}
                      />
                      <Error hidden={errors[value.name] && touched[value.name]}>
                        {errors[value.name]}
                      </Error>
                    </ContainerInput>
                  );
                })}
                <ButtonSubmit
                  onPress={handleSubmit}
                  title="Submit"
                  register={register}
                >
                  <TextButton register={register}>
                    {register ? "Concluir" : "Entrar"}
                  </TextButton>
                </ButtonSubmit>
              </ContainerFormulario>
            </KeyboardAwareScrollView>
            <KeyboardSpacer />
          </ContainerSafe>
        )}
      </Formik>
      {children}
    </Container>
  );
}
