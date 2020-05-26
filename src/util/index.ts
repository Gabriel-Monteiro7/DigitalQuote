import { Dimensions, PixelRatio } from "react-native";
export const height = Math.round(Dimensions.get("window").height);
export const width = Math.round(Dimensions.get("window").width);
export const fontScale = PixelRatio.get();
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { api } from "../service/api";
export const colors = ["#7894D5", "#8b78d5", "#be78d5", "#78d588", "#d4d578", "#d57878"]
export const hp = (value: any) => {
  return Math.round((height * value) / 100);
};
export const wp = (value: any) => {
  return Math.round((width * value) / 100);
};
export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 5,
});

export const formatDate = (date: any) => {
  return format(date, "dd'/'MM'/'yyyy", { locale: pt });
};

export const variationDaily = async (days: any, currency: any) => {
  let newCurrency: [] = [];
  await api.get(`daily/${currency.code}-${currency.codein}/${days}`).then((value) => {

    newCurrency = value.data.reverse();
    newCurrency.push(currency)
  })
  return { data: currency, variations: newCurrency }
}
export const variation = async (month: any, year: any, currency: any) => {
  month = ("" + month).length === 1 ? ('0' + (month + 1)
  ) : (month + 1)
  let newCurrency: [] = [];
  await api.get(`daily/${currency.code}-${currency.codein}?start_date=${year}${month}01&end_date=${year}${month}31`).then((value) => {

    if (value.data.length === 0) {
      newCurrency = value.data
      currency.ask = 0
    }
    else {
      newCurrency = value.data
      currency = value.data[0]
    }
  })
  return { data: currency, variations: newCurrency }
}