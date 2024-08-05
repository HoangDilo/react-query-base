import { apiRoute } from "@/constants/api.constant";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import postService from "../services/post.service";

export const usePosts = () => {
  return useQuery({
    queryKey: [apiRoute.POSTS],
    queryFn: postService.getListPosts,
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [apiRoute.POSTS],
    mutationFn: postService.addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [apiRoute.POSTS],
      });
    },
  });
};
