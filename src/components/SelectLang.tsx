import { Select, SelectProps, MenuItem } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useAppColors } from "../logic/theme";

type Props = SelectProps;

const SelectLang = (props: Props) => {
  const [{ palette }] = useAppColors();
  const [, i18n] = useTranslation();

  const handleChange = (lang: "uk" | "en") => () => {
    if (lang !== i18n.language) i18n.changeLanguage(lang);
  };

  return (
    <Select
      size="small"
      variant="outlined"
      value={i18n.language}
      sx={{
        outline: 0,
        border: `2px solid ${palette.grey[300]}`,
        borderRadius: "10px",
        boxShadow: "none",
        color: palette.white[100],
        "& .MuiOutlinedInput-notchedOutline": {
          display: "none",
        },
        "& .MuiSelect-icon": {
          color: palette.white[100],
        },
      }}
      {...props}
    >
      <MenuItem value="en" onClick={handleChange("en")}>
        EN
      </MenuItem>
      <MenuItem value="uk" onClick={handleChange("uk")}>
        UK
      </MenuItem>
    </Select>
  );
};

export default SelectLang;
