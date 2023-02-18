import { Paper, PaperProps } from "@mui/material";
import React from "react";
import { useAppColors } from "../logic/theme";

type Props = {
  children?: React.ReactNode;
} & PaperProps;

const ContentContainer = ({ children, ...props }: Props) => {
  const [{ palette }] = useAppColors();

  return (
    <Paper
      sx={{
        width: "100%",
        flexGrow: 1,
        bgcolor: palette.white[500],
        borderRadius: "30px",
        p: 3,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default ContentContainer;
