import { createTheme, ThemeOptions } from "@mui/material";
import { useMemo } from "react";

type ColorPaletteType = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type ColorTokensType = {
  palette: {
    orange: ColorPaletteType;
    grey: ColorPaletteType;
    green: ColorPaletteType;
    indigo: ColorPaletteType;
    white: ColorPaletteType;
    brown: ColorPaletteType;
  };
  common: {
    black: string;
  };
};

const colorTokens = (): ColorTokensType => ({
  palette: {
    orange: {
      100: "#f7dddb",
      200: "#efbbb6",
      300: "#e89a92",
      400: "#e0786d",
      500: "#d85649",
      600: "#ad453a",
      700: "#82342c",
      800: "#56221d",
      900: "#2b110f",
    },
    grey: {
      100: "#e0e2e4",
      200: "#c1c4c9",
      300: "#a1a7af",
      400: "#828994",
      500: "#636c79",
      600: "#4f5661",
      700: "#3b4149",
      800: "#282b30",
      900: "#141618",
    },
    green: {
      100: "#e8f1ec",
      200: "#d1e2da",
      300: "#b9d4c7",
      400: "#a2c5b5",
      500: "#8bb7a2",
      600: "#6f9282",
      700: "#536e61",
      800: "#384941",
      900: "#1c2520",
    },
    indigo: {
      100: "#dbdce8",
      200: "#b8b8d1",
      300: "#9495bb",
      400: "#7171a4",
      500: "#4d4e8d",
      600: "#3e3e71",
      700: "#2e2f55",
      800: "#1f1f38",
      900: "#0f101c",
    },
    white: {
      100: "#ffffff",
      200: "#fafafa",
      300: "#f7f7f7",
      400: "#f5f5f5",
      500: "#f2f2f2",
      600: "#c2c2c2",
      700: "#919191",
      800: "#616161",
      900: "#303030",
    },
    brown: {
      100: "#d9d5d5",
      200: "#b4acab",
      300: "#8e8280",
      400: "#695956",
      500: "#432f2c",
      600: "#362623",
      700: "#281c1a",
      800: "#1b1312",
      900: "#0d0909",
    },
  },
  common: {
    black: "#000000",
  },
});

const fontFamily = "Source Sans Pro, sans-serif";

const themeSettings = (): ThemeOptions => {
  const colors = colorTokens();

  return {
    palette: {
      primary: { main: colors.palette.green[500] },
      secondary: { main: colors.palette.indigo[500] },
      background: {
        default: colors.palette.white[500],
        paper: colors.palette.white[100],
      },
    },
    typography: {
      fontFamily,
      fontSize: 14,
      h1: {
        fontFamily,
        fontSize: 40,
      },
      h2: {
        fontFamily,
        fontSize: 32,
      },
      h3: {
        fontFamily,
        fontSize: 24,
      },
      h4: {
        fontFamily,
        fontSize: 20,
      },
      h5: {
        fontFamily,
        fontSize: 16,
      },
      h6: {
        fontFamily,
        fontSize: 14,
      },
    },
  };
};

export const useInitAppTheme = () => {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return [theme];
};

export const useAppColors = () => {
  const colors = useMemo(() => colorTokens(), []);

  return [colors];
};
