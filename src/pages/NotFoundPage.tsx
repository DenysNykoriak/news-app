import React from "react";
import { Stack, Grid, GridProps, Chip } from "@mui/material";
import { useAppColors } from "../logic/theme";
import PageTitle from "../components/layout/content/PageTitle";

type Props = GridProps;

const NotFoundPage = (props: Props) => {
  const [{ palette }] = useAppColors();

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
          <PageTitle title="Page Not Found" />
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
    </Grid>
  );
};

export default NotFoundPage;
