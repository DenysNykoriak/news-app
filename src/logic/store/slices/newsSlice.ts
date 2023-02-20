import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNewsPosts } from "../actions/newsActions";
import { RootState } from "../store";

//Fetching
export type NewsPostIdType = number;

export type NewsPostType = {
  id: NewsPostIdType;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
  deleted?: boolean;
};

//State
interface NewsState {
  allLoaded: boolean;
  loadedPages: number[];
  posts: NewsPostType[];
  deletedPostIds: NewsPostIdType[];
}

const initialState: NewsState = {
  allLoaded: false,
  loadedPages: [],
  posts: [],
  deletedPostIds: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNewsPosts.fulfilled, (state, actions) => {
      if (state.loadedPages.includes(actions.meta.arg.page)) return;

      state.loadedPages.push(actions.meta.arg.page);

      state.posts = [...state.posts, ...actions.payload.posts].map((post) => {
        if (state.deletedPostIds.includes(post.id)) {
          post.deleted = true;
        }
        return post;
      });

      state.allLoaded = actions.payload.total <= state.posts.length;
    });
  },
  reducers: {
    deletePosts: (state, action: PayloadAction<NewsPostIdType[]>) => {
      state.deletedPostIds = Array.from(
        new Set([...state.deletedPostIds, ...action.payload])
      );

      state.posts = state.posts.map((post) => {
        if (state.deletedPostIds.includes(post.id)) {
          post.deleted = true;
        }
        return post;
      });
    },
  },
});

export const newsReducer = newsSlice.reducer;
export const { deletePosts: newsDeletePosts } = newsSlice.actions;

export const newsSelectors = {
  fullWithAvaiblePosts: (state: RootState) => {
    return {
      ...state.news,
      posts: state.news.posts.filter((post) => !post.deleted),
    } as const;
  },
};
