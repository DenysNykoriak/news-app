import axios from "axios";
import { useEffect, useState } from "react";

type NewsType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
  deleted?: boolean;
};

type NewsResponseType = {
  posts: NewsType[];
  total: number;
  skip: number;
  limit: number;
};

export const useNews = (pageSize: number) => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [totalNews, setTotalNews] = useState(-1);

  const [loadNewPage, setLoadNewPage] = useState(true);

  useEffect(() => {
    if (!loadNewPage || (totalNews > -1 && news.length >= totalNews)) return;

    axios
      .get<NewsResponseType>("https://dummyjson.com/posts", {
        params: {
          limit: pageSize,
          skip: news.length,
        },
      })
      .then((result) => {
        const resTotalNews = result.data.total;
        setNews([...news, ...result.data.posts]);
        if (resTotalNews > totalNews) setTotalNews(resTotalNews);
      })
      .catch((result) => result)
      .finally(() => {
        setLoadNewPage(false);
      });
  }, [loadNewPage, pageSize, news, totalNews]);

  return {
    news,
    loading: loadNewPage,
    allLoaded: news.length >= totalNews,
    loadNewPage: () => setLoadNewPage(true),
  } as const;
};
