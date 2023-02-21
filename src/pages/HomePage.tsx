import React from "react";
import { Chip, Grid, Stack, GridProps, Typography } from "@mui/material";

import PageTitle from "../components/layout/content/PageTitle";
import { useAppColors } from "../logic/theme";
import AddBox from "../components/AddBox";
import HomeCard from "../components/home/HomeCard";
import PieWidget from "../components/widgets/PieWidget";
import LastUploadsWidget from "../components/widgets/LastUploadsWidget";
import Avatars from "../components/widgets/parts/Avatars";
import { useTranslation } from "react-i18next";

type Props = GridProps;

const HomePage = (props: Props) => {
  const [{ palette, common: commonColors }] = useAppColors();

  const [t] = useTranslation("App");

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
          <PageTitle title={t("HomePage.title", "Home") as string} />
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
      <Grid item xs={4}>
        <Stack
          sx={{
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: commonColors.black,
              fontWeight: 600,
            }}
          >
            {t("HomePage.contentTitle", "All News In One Place")}
          </Typography>
          <Typography variant="h4" component="h2">
            {t(
              "HomePage.contentSubtitle",
              "Find, read, delete news and have quick access to all of these"
            )}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
            gap: 5,
          }}
        >
          <AddBox
            sx={{
              width: "10%",
            }}
          />
          <HomeCard
            number="01"
            title={t("NewsCategories.Finances", "Finances")}
            subtitle={t("Pages.recentNews", "+134 news", { count: 134 })}
            color={palette.green[500]}
            sx={{
              width: "25%",
            }}
          />
          <HomeCard
            number="02"
            title={t("NewsCategories.Politics", "Politics")}
            subtitle={t("Pages.recentNews", "+234 news", { count: 234 })}
            color={palette.indigo[500]}
            sx={{
              width: "25%",
            }}
          />
          <HomeCard
            number="03"
            title={t("NewsCategories.IT", "IT")}
            subtitle={t("Pages.recentNews", "+34 news", { count: 34 })}
            color={palette.brown[400]}
            sx={{
              width: "25%",
            }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          sx={{
            flexDirection: "row",
            gap: 4,
          }}
        >
          <PieWidget
            title={t("Widgets.NewsStatistics", "News Statistics")}
            percentage={45}
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
                title: t("NewsCategories.Other", "Other"),
                value: 502,
                color: palette.grey[200],
              },
            ]}
            sx={{
              flexGrow: 2,
            }}
          />
          <LastUploadsWidget
            title={t("Widgets.LastNews", "Last News")}
            data={[
              {
                title: t("Widgets.LastNewsPosts.post1", "Last News"),
                date: t("Months.Feb", "Feb 19, 2023", { sequel: "19, 2023" }),
                color: palette.indigo[500],
                avatars: <Avatars letters={["AN", "LG", "FB"]} />,
              },
              {
                title: t("Widgets.LastNewsPosts.post2", "Some News"),
                date: t("Months.Feb", "Feb 14, 2023", { sequel: "14, 2023" }),
                color: palette.green[500],
                avatars: (
                  <Avatars
                    letters={["DB", "AD", "FB", "NH", "CD", "WT"]}
                    max={3}
                  />
                ),
              },
              {
                title: t("Widgets.LastNewsPosts.post3", "More About Banks"),
                date: t("Months.Feb", "Feb 12, 2023", { sequel: "12, 2023" }),
                color: palette.orange[400],
                avatars: <Avatars letters={["ED", "MD", "AR", "TR"]} />,
              },
              {
                title: t("Widgets.LastNewsPosts.post4", "Look in your past"),
                date: t("Months.Feb", "Feb 7, 2023", { sequel: "7, 2023" }),
                color: palette.brown[400],
                avatars: <Avatars letters={["AN", "BN"]} />,
              },
              {
                title: t("Widgets.LastNewsPosts.post5", "Future Medicine"),
                date: t("Months.Feb", "Feb 4, 2023", { sequel: "4, 2023" }),
                color: palette.orange[300],
                avatars: <Avatars letters={["AV", "KL", "BA"]} max={2} />,
              },
              {
                title: t(
                  "Widgets.LastNewsPosts.post6",
                  "Best facts about Ukraine"
                ),
                date: t("Months.Jan", "Jan 29, 2023", { sequel: "29, 2023" }),
                color: palette.indigo[200],
                avatars: <Avatars letters={["PY", "FB", "AA", "BG"]} />,
              },
              {
                title: t("Widgets.LastNewsPosts.post7", "Computer Devices"),
                date: t("Months.Jan", "Jan 24, 2023", { sequel: "24, 2023" }),
                color: palette.green[200],
                avatars: <Avatars letters={["AY", "BB"]} />,
              },
            ]}
            sx={{
              flexGrow: 8,
            }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomePage;
