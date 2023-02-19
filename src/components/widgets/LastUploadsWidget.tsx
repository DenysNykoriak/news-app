import React from "react";
import {
  Divider,
  IconButton,
  Paper,
  PaperProps,
  Stack,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Typography from "@mui/material/Typography";
import { useAppColors } from "../../logic/theme";

export type LastUploadsWidgetData = {
  title: string;
  date: string;
  avatars: React.ReactNode;
  color: string;
};

type Props = {
  title: string;
  data: LastUploadsWidgetData[];
} & PaperProps;

const LastUploadsWidget = ({ title, data, sx, ...props }: Props) => {
  const [{ palette }] = useAppColors();

  const muiTheme = useTheme();
  const isSmallDevice = useMediaQuery(muiTheme.breakpoints.down("md"));

  return (
    <Paper
      sx={{
        alignItems: "center",
        bgcolor: palette.white[100],
        borderRadius: "20px",
        p: 2,
        ...sx,
      }}
      {...props}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          pl: 2,
          mt: 1,
          mb: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <IconButton>
          <MoreVertOutlinedIcon />
        </IconButton>
      </Stack>
      <Divider variant="middle" flexItem />
      <Stack
        sx={{
          p: 2,
          gap: 2,
        }}
      >
        {data.map((upload, index) => (
          <Stack
            key={upload.title + index}
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={(theme) => ({
                  width: "50px",
                  height: "50px",
                  bgcolor: upload.color,
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  [theme.breakpoints.down("md")]: {
                    width: "30px",
                    height: "30px",
                  },
                })}
              >
                <DescriptionOutlinedIcon
                  fontSize={isSmallDevice ? "small" : "medium"}
                  sx={{
                    color: palette.white[100],
                  }}
                />
              </Box>
              <Typography
                variant={isSmallDevice ? "h5" : "h4"}
                sx={{
                  fontWeight: 600,
                }}
              >
                {upload.title}
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "50%",
                flexDirection: "row",
                justifyContent: { xs: "flex-end", sm: "space-between" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                {upload.avatars}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  ml: "1%",
                }}
              >
                {upload.date}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};

export default LastUploadsWidget;
