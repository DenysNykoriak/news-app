import { Box, Stack, StackProps, Typography } from "@mui/material";
import React from "react";
import { useAppColors } from "../../../logic/theme";
import { PieWidgetData } from "../PieWidget";

type Props = {
  key: string;
  segment: Required<PieWidgetData>;
} & StackProps;

const WidgetSegmentInfo = ({ segment, key, ...props }: Props) => {
  const [{ palette }] = useAppColors();

  return (
    <Stack
      key={key}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        mb: 1,
      }}
      {...props}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: "15px",
            height: "15px",
            borderRadius: "5px",
            bgcolor: segment.color,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
          }}
        >
          {segment.title}
        </Typography>
      </Stack>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: palette.grey[300],
        }}
      >
        {segment.value}
      </Typography>
    </Stack>
  );
};

export default WidgetSegmentInfo;
