import { IconButton, Stack, StackProps, Typography } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import React from "react";
import { useAppColors } from "../../logic/theme";

type Props = {
  number: string;
  title: string;
  subtitle: string;
  color: string;
} & StackProps;

const HomeCard = ({ number, title, subtitle, color, sx, ...props }: Props) => {
  const [{ palette }] = useAppColors();

  return (
    <Stack
      sx={{
        bgcolor: color,
        borderRadius: "20px",
        pt: 1,
        pb: 2,
        pl: 3,
        pr: 1,
        gap: 5,
        ...sx,
      }}
      {...props}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: palette.white[100],
          }}
        >
          {number}
        </Typography>
        <IconButton>
          <MoreVertOutlinedIcon
            sx={{
              color: palette.white[100],
            }}
          />
        </IconButton>
      </Stack>
      <Stack>
        <NewspaperOutlinedIcon
          fontSize="large"
          sx={{
            color: palette.white[100],
            mb: 2,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            color: palette.white[100],
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: palette.grey[100],
          }}
        >
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HomeCard;
