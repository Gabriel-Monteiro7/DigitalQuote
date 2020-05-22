import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Value,
  ContainerPadding,
  ContainerBody,
  Loading,
} from "./styles";
import ProgessCircle from "../ProgressCircle";
import { formatPrice, colors, variationDaily } from "../../util";
import load from "../../assets/images/load.json";
import Lottie from "lottie-react-native";
import AreaChart from "../AreaChart";
const Card: React.FC = ({ data }: any) => {
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
    <Container>
      {currency.data === undefined ? (
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
        <>
          <ContainerPadding>
            <ProgessCircle
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
