import { Dimensions, PixelRatio } from "react-native";
export const height = Math.round(Dimensions.get("window").height);
export const width = Math.round(Dimensions.get("window").width);
export const fontScale = PixelRatio.get();
import {format} from "date-fns";
import pt from "date-fns/locale/pt";
import axios from "axios";

export const hp = (value: any) => {
  return Math.round((height * value) / 100);
};
export const wp = (value: any) => {
  return Math.round((width * value) / 100);
};
export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const formatDate = (date: any) => {
  return format(date, "dd'/'MM'/'yyyy", { locale: pt });
};
