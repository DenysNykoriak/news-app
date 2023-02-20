import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsPostType } from "../slices/newsSlice";

type NewsResponseType = {
  posts: NewsPostType[];
  total: number;
  skip: number;
  limit: number;
};

type NewsArgType = {
  page: number;
};

export const fetchNewsPosts = createAsyncThunk<NewsResponseType, NewsArgType>(
  "news/fetchNewsPosts",
  ({ page }) => {
    const postOnPage = 10;

    return axios
      .get<NewsResponseType>("https://dummyjson.com/posts", {
        params: {
          limit: postOnPage,
          skip: page * postOnPage,
        },
      })
      .then((response) => response.data);
  }
);
