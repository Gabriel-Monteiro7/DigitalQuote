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
`;
export const Header = styled.View`
  padding: ${hp(1.5)}px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.ImageBackground.attrs({ borderRadius: 100 })`
  height: 40px;
  width: 40px;
  background: #1b274c;
  border-radius: 100px;
`;
export const Logout = styled.TouchableOpacity``;
export const TextLogout = styled.Text``;
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
  font-size: ${hp(5)}px;
  font-family: "Lato-Black";
  color: #1b274c;
  margin: 5px 0px;
`;

export const ActualValue = styled.Text`
  color: #8b98ac;
  font-size: ${hp(2)}px;
`;
export const VariationPositive = styled.Text`
  color: #50ce8a;
  font-size: ${hp(2)}px;
`;
export const VariationNegative = styled.Text`
  color: #ff4a4a;
  font-size: ${hp(2)}px;
`;
export const ContainerVariation = styled(Header)`
  justify-content: center;
`;
export const Loading = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 50px;
`;
