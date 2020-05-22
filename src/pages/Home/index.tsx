import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { hp, wp, height, formatPrice } from "../../util";
import Carousel from "react-native-snap-carousel";
import load from "../../assets/images/load.json";
import Lottie from "lottie-react-native";
import * as GoogleSignIn from "expo-google-sign-in";
import {
  Container,
  Title,
  Header,
  Avatar,
  Logout,
  TextLogout,
  Icon,
  Body,
  ActualValue,
  Value,
  ContainerValue,
  VariationPositive,
  VariationNegative,
  ContainerVariation,
  Loading,
} from "./styles";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { singOut } from "../../store/modules/auth/actions";
import { getCurrencyRequest } from "../../store/modules/currency/actions";

const Home: React.FC = ({ route }: any) => {
  const [index, setIndex] = useState(0);
  let carousel = useRef(null);
  const { user } = useSelector((state: any) => state.user);
  const { currencies } = useSelector((state: any) => state.currency);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data: any = { percent: 30, data: 30 };
  useEffect(() => {
    dispatch(getCurrencyRequest());
  }, []);
  // useEffect(() => {
  //   console.log("oi");
  // }, [index]);
  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.photoURL }} />
        <Title>{user.firstName}</Title>
        <Logout
          onPress={async () => {
            if (user.google !== false) {
              await GoogleSignIn.signOutAsync();
            }
            dispatch(singOut());
          }}
        >
          <Icon name="logout" />
        </Logout>
      </Header>
      {currencies.length === 0 ? (
        <Loading>
          <Lottie
            style={{
              flex: 1,
            }}
            resizeMode="cotain"
            autoPlay
            source={load}
            loop
          />
        </Loading>
      ) : (
        <Body>
          <ContainerValue>
            <ActualValue>Valor Atual</ActualValue>

            <Value>{formatPrice(currencies[index].ask)}</Value>
            <ContainerVariation>
              {currencies[index].varBid > 0 ? (
                <>
                  <Icon name="menu-up" color={"#50ce8a"} />
                  <VariationPositive>
                    +R${parseFloat(currencies[index].varBid).toFixed(3)}
                  </VariationPositive>
                </>
              ) : (
                <>
                  <Icon name="menu-down" color={"#ff4a4a"} />
                  <VariationNegative>
                    -R${(-1 * currencies[index].varBid).toFixed(3)}
                  </VariationNegative>
                </>
              )}
            </ContainerVariation>
          </ContainerValue>
          <Carousel
            ref={(c: any) => {
              carousel = c;
            }}
            data={currencies}
            renderItem={({ item, index, separators }: any) => (
              <Card data={item} />
            )}
            onSnapToItem={(index: any) => setIndex(index)}
            sliderWidth={wp(200)}
            itemWidth={wp(65)}
            // containerCustomStyle={{ marginLeft: -120 }}
          />
        </Body>
      )}
    </Container>
  );
};

export default Home;
