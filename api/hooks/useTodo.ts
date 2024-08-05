import { apiRoute } from "@/constants/api.constant";
import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todo.service";

export const useTodo = () => {
  return useQuery({
    queryKey: [`${apiRoute.TODO}`],
    queryFn: () => {
      console.log("fetching todo");
      return todoService.getListTodos();
    },
  });
};
