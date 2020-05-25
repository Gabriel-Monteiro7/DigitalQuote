import { useNavigation } from "@react-navigation/native";
import * as GoogleSignIn from "expo-google-sign-in";
import Lottie from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { useDispatch, useSelector } from "react-redux";
import load from "../../assets/images/load.json";
import Card from "../../components/Card";
import { singOut } from "../../store/modules/auth/actions";
import { getCurrenciesRequest } from "../../store/modules/currency/actions";
import { formatPrice, wp } from "../../util";
import { ActualValue, Avatar, Body, Container, ContainerValue, ContainerVariation, Header, Icon, Loading, Logout, Title, Value, VariationNegative, VariationPositive } from "./styles";

const Home: React.FC = ({ route }: any) => {
  const [index, setIndex] = useState(0);
  let carousel = useRef(null);
  const { user } = useSelector((state: any) => state.user);
  const { currencies } = useSelector((state: any) => state.currency);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data: any = { percent: 30, data: 30 };
  useEffect(() => {
    dispatch(getCurrenciesRequest());
  }, []);
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
            resizeMode="contain"
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
