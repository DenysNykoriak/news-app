import React from "react";
import {
  Stack,
  Grid,
  GridProps,
  Chip,
  useTheme as useMuiTheme,
  Typography,
  IconButton,
  Skeleton,
  styled,
  Tooltip,
} from "@mui/material";
import { useAppColors } from "../logic/theme";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PageTitle from "../components/layout/content/PageTitle";
import PieWidget from "../components/widgets/PieWidget";
import { useNews } from "../hooks/useNews";
import AddBox from "../components/AddBox";
import NewsPost from "../components/news/NewsPost";
import { useTranslation } from "react-i18next";

type Props = GridProps;

const NewsPostSkeleton = styled(Skeleton)(() => ({
  borderRadius: "20px",
}));

const NewsPage = (props: Props) => {
  const [{ palette }] = useAppColors();

  const theme = useMuiTheme();

  const { news, allLoaded, loading, loadNewPage } = useNews();

  const [t] = useTranslation("App");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Grid container spacing={4} {...props}>
      <Grid item xs={12}>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <PageTitle title={t("NewsPage.title", "News") as string} />
          <Chip
            label={t("Pages.recentNews", "+100 news", { count: 100 })}
            size="small"
            sx={{
              bgcolor: palette.orange[500],
              color: palette.white[100],
            }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              width: "68%",
              gap: 2,
            }}
          >
            {news.length === 0 && loading && (
              <>
                <NewsPostSkeleton variant="rectangular" height={112} />
                <NewsPostSkeleton variant="rectangular" height={168} />
                <NewsPostSkeleton variant="rectangular" height={78} />
                <NewsPostSkeleton variant="rectangular" height={103} />
                <NewsPostSkeleton variant="rectangular" height={168} />
              </>
            )}
            {news.map((newsPost) => (
              <NewsPost key={newsPost.id} newsPost={newsPost} />
            ))}
            {allLoaded && (
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  my: 2,
                }}
              >
                {t(
                  "allNewsLoaded",
                  "Unfortunately, this is all the news. Come back later to see more"
                )}
              </Typography>
            )}
            <AddBox
              disabled={allLoaded || loading}
              onClick={loadNewPage}
              sx={{
                minHeight: "90px",
              }}
            />
          </Stack>
          <Stack
            sx={{
              position: "sticky",
              top: theme.spacing(4),
              maxWidth: "min(500px, 30%)",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <PieWidget
              title={t("Widgets.NewsStatistics", "News Statistics")}
              percentage={65}
              data={[
                {
                  title: t("NewsCategories.Finances", "Finances"),
                  value: 342,
                  color: palette.indigo[500],
                },
                {
                  title: t("NewsCategories.Politics", "Politics"),
                  value: 242,
                  color: palette.green[500],
                },
                {
                  title: t("NewsCategories.IT", "IT"),
                  value: 302,
                  color: palette.orange[400],
                },
                {
                  title: t("NewsCategories.Medicine", "Medicine"),
                  value: 282,
                  color: palette.green[600],
                },
                {
                  title: t("NewsCategories.Jobs", "Jobs"),
                  value: 102,
                  color: palette.indigo[400],
                },
                {
                  title: t("NewsCategories.Other", "Other"),
                  value: 502,
                  color: palette.red[300],
                },
              ]}
            />
            <Tooltip title={t("NewsPage.moveToTop", "Move to top")}>
              <IconButton
                onClick={scrollToTop}
                sx={{
                  alignSelf: "center",
                }}
              >
                <ArrowUpwardOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <Stack
          sx={{
            position: "relative",
          }}
        ></Stack>
      </Grid>
    </Grid>
  );
};

export default NewsPage;
