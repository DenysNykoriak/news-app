import { Typography, TypographyProps } from "@mui/material";
import React from "react";

type Props = {
  title?: string;
} & TypographyProps;

const PageTitle = ({ title, ...props }: Props) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 500,
        letterSpacing: "-3px",
      }}
      {...props}
    >
      {title}
    </Typography>
  );
};

export default PageTitle;
