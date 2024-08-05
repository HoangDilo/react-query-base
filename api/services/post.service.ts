import { apiRoute } from "@/constants/api.constant";
import { ApiClient } from "..";
import { IPostItem, IPostResponse } from "@/types";

export default {
  getListPosts(): Promise<IPostResponse> {
    console.log("fetching posts");
    return ApiClient.get(apiRoute.POSTS);
  },
  addPost(payload: {
    title: string;
    body: string;
    userId: number;
  }): Promise<IPostItem> {
    return ApiClient.post(apiRoute.POSTS, payload);
  },
};
