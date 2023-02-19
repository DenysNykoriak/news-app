import React from "react";
import { Chip, Grid, Stack, GridProps, Typography } from "@mui/material";

import PageTitle from "../components/layout/content/PageTitle";
import { useAppColors } from "../logic/theme";
import AddBox from "../components/AddBox";
import HomeCard from "../components/home/HomeCard";
import PieWidget from "../components/widgets/PieWidget";
import LastUploadsWidget from "../components/widgets/LastUploadsWidget";
import Avatars from "../components/widgets/Avatars";

type Props = GridProps;

const HomePage = (props: Props) => {
  const [{ palette, common: commonColors }] = useAppColors();

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
          <PageTitle title="Home" />
          <Chip
            label="+100 news"
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
            All News In One Place
          </Typography>
          <Typography variant="h4" component="h2">
            Find, read, delete news and have quick access to all of these
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <Stack
          sx={{
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <AddBox
            sx={{
              width: "10%",
              height: "100%",
            }}
          />
          <HomeCard
            number="01"
            title="Finances"
            subtitle="+134 news"
            color={palette.green[500]}
            sx={{
              width: "25%",
            }}
          />
          <HomeCard
            number="02"
            title="Politics"
            subtitle="+234 news"
            color={palette.indigo[500]}
            sx={{
              width: "25%",
            }}
          />
          <HomeCard
            number="03"
            title="IT"
            subtitle="+34 news"
            color={palette.brown[400]}
            sx={{
              width: "25%",
            }}
          />
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <PieWidget
          title="News Statistics"
          percentage={45}
          data={[
            { title: "Finances", value: 342, color: palette.indigo[500] },
            { title: "Politics", value: 242, color: palette.green[500] },
            { title: "IT", value: 302, color: palette.orange[400] },
            { title: "Other", value: 502, color: palette.grey[200] },
          ]}
          sx={{
            width: "100%",
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <LastUploadsWidget
          title="Last News"
          data={[
            {
              title: "News in IT",
              date: "Feb 19, 2023",
              color: palette.indigo[500],
              avatars: <Avatars letters={["AN", "LG", "FB"]} />,
            },
            {
              title: "Some News",
              date: "Feb 14, 2023",
              color: palette.green[500],
              avatars: (
                <Avatars
                  letters={["DB", "AD", "FB", "NH", "CD", "WT"]}
                  max={3}
                />
              ),
            },
            {
              title: "More About Banks",
              date: "Feb 12, 2023",
              color: palette.orange[400],
              avatars: <Avatars letters={["ED", "MD", "AR", "TR"]} />,
            },
            {
              title: "Look in your past",
              date: "Feb 7, 2023",
              color: palette.brown[400],
              avatars: <Avatars letters={["AN"]} />,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
