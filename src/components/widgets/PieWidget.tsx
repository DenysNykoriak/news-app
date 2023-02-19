import React from "react";
import {
  Box,
  IconButton,
  Paper,
  PaperProps,
  Stack,
  useTheme,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Typography from "@mui/material/Typography";
import { useAppColors } from "../../logic/theme";
import { PieChart } from "react-minimal-pie-chart";
import WidgetDataSection from "./parts/WidgetDataSection";

export type PieWidgetData = {
  title: string;
  value: number;
  color: string;
};

type Props = {
  title: string;
  data: PieWidgetData[];
  percentage: number;
} & PaperProps;

const PieWidget = ({ title, data, percentage, sx, ...props }: Props) => {
  const [{ palette }] = useAppColors();
  const muiTheme = useTheme();

  return (
    <Paper
      sx={{
        bgcolor: palette.white[100],
        borderRadius: "20px",
        p: 3,
        ...sx,
      }}
      {...props}
    >
      <Stack
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
        <Stack
          sx={{
            position: "relative",
            py: 2,
            px: 5,
            mb: 2,
          }}
        >
          <PieChart animate={true} animationDuration={1000} data={data} />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: muiTheme.spacing(3),
              right: muiTheme.spacing(3),
              bgcolor: palette.white[100],
              borderRadius: "50%",
              m: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 600,
              }}
            >
              {percentage}%
            </Typography>
          </Box>
        </Stack>
        <WidgetDataSection data={data} />
      </Stack>
    </Paper>
  );
};

export default PieWidget;
