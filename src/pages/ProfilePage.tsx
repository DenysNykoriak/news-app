import React from "react";
import {
  Stack,
  Grid,
  GridProps,
  Chip,
  Typography,
  IconButton,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useAppColors } from "../logic/theme";
import PageTitle from "../components/layout/content/PageTitle";
import LastUploadsWidget from "../components/widgets/LastUploadsWidget";
import Avatars from "../components/widgets/parts/Avatars";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = GridProps;

const ProfilePage = (props: Props) => {
  const navigate = useNavigate();
  const [{ palette }] = useAppColors();

  const [t] = useTranslation("App");

  const { user } = useAuth();
  if (!user) {
    navigate("/");
    return null;
  }

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
          <PageTitle title={t("ProfilePage.title", "Profile") as string} />
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
            p: 2,
            bgcolor: palette.white[100],
            borderRadius: "20px",
          }}
        >
          <Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: palette.green[500],
                  mr: 1,
                }}
              >
                {user.name.charAt(0)}
              </Avatar>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                }}
              >
                {user.name}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              gap={1}
              sx={{
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                }}
              >
                @{user.username}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography variant="h5">
                {t("ProfilePage.role", "Role")}
                {": "}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                }}
              >
                {user.role}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography variant="h5">
                {t("ProfilePage.lvl", "Lvl")}: 2
              </Typography>
            </Stack>
            <Stack direction="row" gap={3}>
              <Button
                variant="contained"
                sx={{
                  color: palette.white[100],
                }}
              >
                {t("ProfilePage.messageButton", "Message")}
              </Button>
              <Button variant="outlined">
                {t("ProfilePage.shareProfile", "Share Profile")}
              </Button>
            </Stack>
          </Stack>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </Stack>
      </Grid>
      <Grid item xs={12}>
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
        />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
