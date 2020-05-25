import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";
import { hp, wp } from "../../util";
export const Container = styled.View`
  margin: ${hp(0)}px;
`;
export const ContainerInput = styled.View`
  border-radius: 1px;
  color: #11111140;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${hp(0.5)}px ${wp(0)}px ${hp(0.5)}px ;
  border-bottom-width: 2px;
  border-color: ${(props: any) => (props.error ? "#FE2E2E" : "#11111140")};
`;
export const TextFild = styled.TextInput.attrs({
  placeholderTextColor: "#11111120",
})`
  font-size: ${hp(2)}px;
  width: 90%;
`;
export const Label = styled.Text`
  margin: ${hp(0)}px;
  color: #11111140;
  font-family: "Lato-Bold";
  font-size: ${hp(2.1)}px;
`;
export const ContainerIcon = styled.View`
  /* padding:${hp(1.5)}px 0px; */
`;
export const Icon = styled(FontAwesome5)`
  font-size: ${hp(3)}px;
  color: #11111120;
`;
export const NoIcon = styled.Text`
  font-size: ${hp(3.3)}px;
`;
