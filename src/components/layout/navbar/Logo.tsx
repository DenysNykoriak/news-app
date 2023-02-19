import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";
import { useAppColors } from "../../../logic/theme";

type Props = BoxProps;

const Logo = ({ ...props }: Props) => {
  const [{ palette }] = useAppColors();

  return (
    <Box {...props}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: palette.white[200],
          fontStyle: "italic",
          fontWeight: 600,
        }}
      >
        News App
      </Typography>
    </Box>
  );
};

export default Logo;
