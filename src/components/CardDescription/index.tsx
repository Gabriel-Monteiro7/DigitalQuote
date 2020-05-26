import Lottie from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import load from "../../assets/images/load.json";
import { colors, formatPrice, hp, variation } from "../../util";
import AreaChart from "../AreaChart";
import ProgessCircle from "../ProgressCircle";
import monthDate from "./data";
import { Container, ContainerItem, ContainerList, ContainerPadding, Item, Loading, NewFlatList, NotFound, NotFoundText, Title, Value } from "./styles";

const CardDescription: React.FC = (props) => {
  let refFlatList = useRef(false);
  const currentDate = new Date();
  const [color, setColor] = useState(Math.floor(Math.random() * 6));
  const [currency, setCurrency] = useState(props.currency);
  const [date, setDate] = useState({
    month: monthDate.slice(0, currentDate.getMonth() + 1),
    year: Array.from({ length: 5 }, (value, indice) => {
      return currentDate.getFullYear() - indice;
    }),
  });
  const [dateSelected, setDateSelected] = useState({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  });

  function changeDate(month: any, year: any) {
    if (month === false) {
      if (year !== currentDate.getFullYear()) {
        setDateSelected({ ...dateSelected, year: year });
        setDate({ ...date, month: monthDate });
      } else {
        setDateSelected({ month: currentDate.getMonth(), year: year });
        setDate({
          ...date,
          month: monthDate.slice(0, currentDate.getMonth() + 1),
        });
        refFlatList.current.scrollToIndex({
          animated: true,
          index: currentDate.getMonth(),
        });
      }
    } else {
      setDateSelected({ ...dateSelected, month: month });
    }
  }
  async function loadCurrency() {
    await variation(dateSelected.month, dateSelected.year, currency.data).then(
      (value) => {
        setCurrency(value);
      }
    );
  }
  useEffect(() => {
    loadCurrency();
  }, [dateSelected]);
  return (
    <Container>
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
              options={{ width: hp(13) }}
              color={colors[color]}
              percent={
                currency.data?.pctChange < 0
                  ? -1 * currency.data?.pctChange
                  : currency.data?.pctChange
              }
            />
            <Title>
              {currency.data?.name} /{"  "}
              {currency.data?.code}
            </Title>
            <Value>{formatPrice(currency.data?.ask).replace("R$", "")}</Value>
          </ContainerPadding>
          <View>
            <ContainerList>
              <NewFlatList
                ref={refFlatList}
                keyExtractor={(item, indice) => item + "" + indice}
                data={date.month}
                renderItem={({ item, index, separators }) => (
                  <ContainerItem
                    onPress={() => {
                      changeDate(index, false);
                    }}
                  >
                    <Item borderColor={index === dateSelected.month}>
                      {item}
                    </Item>
                  </ContainerItem>
                )}
              ></NewFlatList>
            </ContainerList>
            {currency.variations.length === 0 ? (
              <NotFound>
                <NotFoundText>Cotação não encontrada</NotFoundText>
              </NotFound>
            ) : (
              <AreaChart color={color} currency={currency} />
            )}
            <ContainerList>
              <NewFlatList
                inverted={true}
                keyExtractor={(item, indice) => item + "" + indice}
                data={date.year}
                renderItem={({ item, indice }) => (
                  <ContainerItem
                    onPress={() => {
                      changeDate(false, item);
                    }}
                  >
                    <Item borderColor={item === dateSelected.year}>{item}</Item>
                  </ContainerItem>
                )}
              ></NewFlatList>
            </ContainerList>
          </View>
        </>
      )}
    </Container>
  );
};
export default CardDescription;
