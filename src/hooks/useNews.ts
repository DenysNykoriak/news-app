import { useEffect, useState } from "react";
import { fetchNewsPosts } from "../logic/store/actions/newsActions";
import { newsSelectors } from "../logic/store/slices/newsSlice";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useNews = () => {
  const dispatch = useAppDispatch();

  const { posts, allLoaded, loadedPages } = useAppSelector(
    newsSelectors.fullWithAvaiblePosts
  );

  const [loadNewPage, setLoadNewPage] = useState(loadedPages.length === 0);

  useEffect(() => {
    if (!loadNewPage) return;

    dispatch(fetchNewsPosts({ page: loadedPages.length })).then(() => {
      setLoadNewPage(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadNewPage]);

  return {
    news: posts,
    loading: loadNewPage,
    allLoaded,
    loadNewPage: () => setLoadNewPage(true),
  } as const;
};
