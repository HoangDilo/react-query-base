import axios from "axios";
import { apiConfig } from "@/constants/api.constant";

export const ApiClient = axios.create({
  baseURL: apiConfig.BASE_URL,
  timeout: apiConfig.TIMEOUT,
  headers: apiConfig.HEADER,
});
