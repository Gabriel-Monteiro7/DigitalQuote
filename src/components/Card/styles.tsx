import styled from "styled-components/native";
import { hp, wp } from "../../util";

export const Container = styled.View`
  background: #13255ff2;
  border-radius: 40px;
  height: ${hp(55)}px;
`;

export const Title = styled.Text`
  font-size: ${hp(2.9)}px;;
  margin: ${hp(1)}px 0px;
  font-family: "Lato-Regular";
  color: white;
  letter-spacing: -1px;
`;
export const Value = styled.Text`
  font-size: ${hp(1.5)}px;
  margin-bottom: 10px;
  font-family: "Lato-Bold";
  color: #ffffff50;
`;
export const ContainerPadding = styled.View`
  padding: ${hp(2)}px ${hp(3)}px;
`;
export const ContainerBody = styled.View`
  margin-top: 0px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  opacity: 0.2;
  background: ${(props: any) => props.background};
  flex: 1;
`;
export const Loading = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 50px;
`;