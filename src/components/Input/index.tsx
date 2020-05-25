import React, { forwardRef, useState } from "react";
import { Container, ContainerIcon, ContainerInput, Icon, Label, NoIcon, TextFild } from "./styles";
function Input(
  {
    colorIcon,
    error,
    placeholder,
    label,
    icone,
    password = false,
    name,
    keyboardType = "default",
    refs,
    ...rest
  }: any,
  ref: any
) {
  const [passwordHidden, setPasswordHidden] = useState(true);
  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput error={error}>
        <TextFild
          ref={ref}
          keyboardType={keyboardType}
          {...rest}
          placeholder={placeholder}
          secureTextEntry={password && passwordHidden}
        />
        {icone !== undefined ? (
          <ContainerIcon
            onTouchStart={() => setPasswordHidden(!passwordHidden)}
          >
            <Icon
              name={!passwordHidden && password ? icone + "-slash" : icone}
              color={colorIcon}
            />
          </ContainerIcon>
        ) : (
          <NoIcon />
        )}
      </ContainerInput>
    </Container>
  );
}
export default forwardRef(Input);
