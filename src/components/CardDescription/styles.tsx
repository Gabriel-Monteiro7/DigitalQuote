import { FlatList } from "react-native";
import styled from "styled-components/native";
import { hp } from "../../util";
export const Container = styled.View`
  background: #13255ff2;
  border-radius: ${hp(7)}px;
  /* height: ${hp(55)}px; */
  flex:0.99;
  align-items:center;
  width:${hp(47)}px;
`;

export const Title = styled.Text`
  font-size: ${hp(2.5)}px;
  margin-top: ${hp(1)}px;
  font-family: "Lato-Regular";
  color: #ffffff50;
  text-align: center;
`;
export const Value = styled.Text`
  font-size: ${hp(5.5)}px;
  /* margin-bottom: 10px; */
  margin-top: ${hp(1.5)}px;
  font-family: "Lato-Bold";
  color: white;
`;
export const ContainerPadding = styled.View`
  padding: ${hp(0)}px ${hp(3)}px;
  align-items: center;
`;

export const Loading = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 300px;
  width: 300px;
`;
export const ContainerList = styled.View`
  margin-top: ${hp(4)}px;
  height: ${hp(3.5)}px;
  padding: ${hp(0)}px ${hp(3)}px;
`;
export const ContainerItem = styled.TouchableOpacity`
  margin-right: 30px;
`;
export const Item = styled.Text`
  font-family: "Lato-Regular";
  color: #ffffff;
  font-size: 12px;
  border: 2px solid
    ${(props: any) => (props.borderColor ? "#ffffff50" : "transparent")};
  border-radius: 100px;
  text-align: center;
  padding: 3px 6px 0px;
`;
export const NewFlatList = styled(FlatList).attrs(() => ({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
}))``;
export const NotFound = styled.View`
  justify-content: center;
  align-items: center;
  height: ${hp(20)}px;
`;
export const NotFoundText = styled(Value)`
  font-size: ${hp(3)};
`;
