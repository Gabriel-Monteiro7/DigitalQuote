import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import load from "../../assets/images/load.json";
import { setCurrencyRequest } from "../../store/modules/currency/actions";
import { colors, formatPrice, variationDaily } from "../../util";
import AreaChart from "../AreaGroup";
import ProgessCircle from "../ProgressCircle";
import { Container, ContainerBody, ContainerPadding, Loading, Title, Value } from "./styles";
const Card: React.FC = ({ data }: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [color, setColor] = useState(Math.floor(Math.random() * 6));
  const [currency, setCurrency]: any = useState({});
  async function loadCurrency() {
    await variationDaily(30, data).then((value) => {
      setCurrency(value);
    });
  }
  useEffect(() => {
    loadCurrency();
  }, []);
  return (
    <Container
      onPress={() => dispatch(setCurrencyRequest(currency, navigation))}
    >
      {currency.data === undefined ? (
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
        <>
          <ContainerPadding>
            <ProgessCircle
              options={{ width: 50 }}
              color={colors[color]}
              percent={
                currency.data?.pctChange < 0
                  ? -1 * currency.data?.pctChange
                  : currency.data?.pctChange
              }
            />
            <Title>{currency.data?.name}</Title>
            <Value>
              {formatPrice(currency.data?.ask).replace("R$", "")}{" "}
              {currency.data?.code}
            </Value>
          </ContainerPadding>
          <AreaChart color={color} currency={currency} />
          <ContainerBody background={colors[color]}></ContainerBody>
        </>
      )}
    </Container>
  );
};
export default Card;
