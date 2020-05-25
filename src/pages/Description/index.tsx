import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/CardDescription";
import { Back, Body, Container, Header, Icon, Title } from "./styles";
const Description: React.FC = ({ route }: any) => {
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.currency);
  const { user } = useSelector((state: any) => state.user);
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <Back
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="window-close" />
        </Back>
        <Title>{user.firstName}</Title>
      </Header>
      <Body>
        <Card currency={currency} />
      </Body>
    </Container>
  );
};

export default Description;
