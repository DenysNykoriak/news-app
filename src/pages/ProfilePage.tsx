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

type Props = GridProps;

const ProfilePage = (props: Props) => {
  const navigate = useNavigate();
  const [{ palette }] = useAppColors();

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
          <PageTitle title="Profile" />
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
              <Typography variant="h5">Role: </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                }}
              >
                {user.role}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography variant="h5">Lvl: 2</Typography>
            </Stack>
            <Stack direction="row" gap={3}>
              <Button
                variant="contained"
                sx={{
                  color: palette.white[100],
                }}
              >
                Message
              </Button>
              <Button variant="outlined">Share Profile</Button>
            </Stack>
          </Stack>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </Stack>
      </Grid>
      <Grid item xs={12}>
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
              avatars: <Avatars letters={["AN", "BN"]} />,
            },
            {
              title: "Future Medicine",
              date: "Feb 4, 2023",
              color: palette.orange[300],
              avatars: <Avatars letters={["AV", "KL", "BA"]} max={2} />,
            },
            {
              title: "Best facts about Ukraine",
              date: "Jan 29, 2023",
              color: palette.indigo[200],
              avatars: <Avatars letters={["PY", "FB", "AA", "BG"]} />,
            },
            {
              title: "Computer Devices",
              date: "Jan 24, 2023",
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
