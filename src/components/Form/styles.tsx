import styled from "styled-components/native";
import { hp, wp } from "../../util";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #ffffff;
`;

export const Error = styled.Text`
  font-size: ${hp(1.8)}px;
  color: ${(props: any) =>
    props.hidden !== undefined ? "#fe2e2e" : "transparent"};
  /* margin-bottom: ${hp(1)}px; */
`;
export const ButtonSubmit = styled.TouchableOpacity`
  margin-top: ${hp(3)}px;
  background: ${(props: any) => (props.register ? "white" : "#5c49e0")};
  border-radius: 7px;
  width: 100%;
  border-width:1px;
  border-color: ${(props: any) => (props.register ? "#5c49e0" : "white")};
`;
export const TextButton = styled.Text`
  font-size: ${hp(2)}px;
  font-family: "Lato-Bold";
  color: ${(props: any) => (props.register ? "#5c49e0" : "white")};
  text-align: center;
  padding: ${hp(2.3)}px 0px;
`;
export const ContainerInput = styled.View`
  margin-bottom: ${hp(2)}px;
`;
export const ContainerFormulario = styled.View`
  padding: 0px 24px;

  padding-top: ${hp(5)}px;
`;
export const ContainerSafe = styled.SafeAreaView`
  background: #ffffff;
`;
