import React from "react";
import { Stack, StackProps, Typography, Link } from "@mui/material";
import { useAppColors } from "../../logic/theme";

type Props = StackProps<"footer">;

const Footer = (props: Props) => {
  const [{ palette }] = useAppColors();

  return (
    <Stack
      component="footer"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        bgcolor: palette.grey[500],
        p: 3,
        pt: 7,
        mt: -4,
        zIndex: 0,
      }}
      {...props}
    >
      <Typography
        variant="body1"
        sx={{
          color: palette.white[100],
        }}
      >
        Test Task for AlterEGO on position Strong Junior Developer
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: palette.white[100],
          }}
        >
          Author: Denys Nykoriak
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: palette.white[100],
          }}
        >
          Inspired by:{" "}
          <Link
            href="https://dribbble.com/shots/17257234-Admin-dashboard-analytics-UX"
            underline="none"
            target="_blank"
          >
            Dribbble
          </Link>{" "}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
