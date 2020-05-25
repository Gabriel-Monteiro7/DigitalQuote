import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import styled from "styled-components/native";
import { hp, wp } from "../../util";
export const Icon = styled(MaterialCommunityIcons)`
  font-size: 25px;
  color: ${(props) => (props.color !== undefined ? props.color : "#1b274c")};
`;
export const Container = styled.View`
  background: white;
  padding: 0px ${wp(5)}px;
  padding-top: ${Constants.statusBarHeight + hp(0)}px;
  flex: 1;
  background: #ffffff;
`;
export const Title = styled.Text`
  font-size: ${hp(3)}px;
  color: #1b274c;
  letter-spacing: -1.5px;
  font-family: "Lato-Bold";
  margin-left: -16px;
  text-align: center;
`;
export const Header = styled.View`
  margin: ${hp(1)}px 1px ${hp(2)}px;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
`;

export const Body = styled.View`
  align-items: center;
  /* justify-content:space-between; */
  flex: 1;
`;
export const ContainerValue = styled.View`
  align-items: center;
  height: ${hp(16)}px;
  margin: ${hp(2)}px 0px;
  margin-bottom: ${hp(8)}px;
`;
export const Value = styled.Text`
  font-size: ${hp(6)}px;
  font-family: "Lato-Black";
  color: #1b274c;
  margin: 5px 0px;
`;

export const Back = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  /* bottom: 0; */
  left: 0;
`;
export const Loading = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 50px;
`;
