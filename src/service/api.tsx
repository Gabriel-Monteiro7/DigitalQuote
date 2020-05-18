import axios from "axios";
const currentDate = new Date().getFullYear();

import ENV from "../../env_api.json";
export const api = axios.create({
  //https://locahost:3333  ->> Se for rodar local
  baseURL: `${ENV.API_KEY}`,
});
