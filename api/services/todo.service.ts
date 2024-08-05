import { IToDoResponse } from "@/types";
import { ApiClient } from "..";
import { apiRoute } from "@/constants/api.constant";

export default {
  getListTodos(): Promise<IToDoResponse> {
    return ApiClient.get(apiRoute.TODO);
  },
};
