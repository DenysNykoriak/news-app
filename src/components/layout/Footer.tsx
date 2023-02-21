import React from "react";
import { Stack, StackProps, Typography, Link } from "@mui/material";
import { useAppColors } from "../../logic/theme";
import { useTranslation } from "react-i18next";

type Props = StackProps<"footer">;

const Footer = (props: Props) => {
  const [{ palette }] = useAppColors();

  const [t] = useTranslation("App");

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
        align="center"
        sx={{
          color: palette.white[100],
        }}
      >
        {t(
          "Footer.mainText",
          "Test Task for AlterEGO on position Strong Junior Developer"
        )}
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
          {t("Footer.author", "Author: Denys Nykoriak")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: palette.white[100],
          }}
        >
          {t("Footer.inspiredBy", "Inspired by") + ": "}
          <Link
            href="https://dribbble.com/shots/17257234-Admin-dashboard-analytics-UX"
            underline="none"
            target="_blank"
          >
            {t("Footer.inspiredLink", "Dribbble")}
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
