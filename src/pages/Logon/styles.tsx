import styled from "styled-components/native";
import Constants from "expo-constants";
import { hp, wp } from "../../util";

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;

  background: #ffffff;
`;
export const ContainerDefault = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + hp(10)}px;
  background: #ffffff;
`;
export const Title = styled.Text`
  font-size: 35px;
  font-family: "Lato-Bold";
  padding: 0px 24px;
`;
export const SingUp = styled.Text`
  color: #111111;
  text-align: center;
  margin: 40px 0px;
`;
export const SingUpLink = styled.TouchableOpacity`
`;
export const TextSingUpLink = styled.Text`
  color: #5c49e0;
  font-family: "Lato-Bold";
`;
export const ButtonGoogle = styled.TouchableOpacity`
  background: #ea4335;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
`;
export const TextButtonGoogle = styled.Text`
  color: #ffffff;
  font-family: "Lato-Bold";
  padding: ${hp(2.3)}px 0px;
  text-align: center;
  font-size: ${hp(2)}px;
`;
export const IconGoogle = styled.ImageBackground.attrs({
  borderRadius: 100,
})`
  height: ${hp(5)}px;
  width: ${hp(5)}px;
  margin: 0px 30px 0px 20px;
`;
export const ContainerFooter = styled.View`
  height: ${hp(10)}px;
  background: #111111;
`;
