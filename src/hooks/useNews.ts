import { useEffect, useState } from "react";
import { fetchNewsPosts, newsSelectors } from "../logic/store/slices/newsSlice";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useNews = () => {
  const dispatch = useAppDispatch();

  const news = useAppSelector(newsSelectors.posts);
  const { allLoaded, loadedPages } = useAppSelector(newsSelectors.full);

  const [loadNewPage, setLoadNewPage] = useState(loadedPages.length === 0);

  useEffect(() => {
    if (!loadNewPage) return;

    dispatch(fetchNewsPosts({ page: loadedPages.length })).then(() => {
      setLoadNewPage(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadNewPage]);

  return {
    news,
    loading: loadNewPage,
    allLoaded,
    loadNewPage: () => setLoadNewPage(true),
  } as const;
};
