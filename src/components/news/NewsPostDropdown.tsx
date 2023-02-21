import { Menu, MenuProps, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  newsDeletePosts,
  NewsPostIdType,
} from "../../logic/store/slices/newsSlice";
import { useAppColors } from "../../logic/theme";
import { useTranslation } from "react-i18next";

type Props = {
  newsPostId: NewsPostIdType;
} & MenuProps;

const NewsPostDropdown = ({ newsPostId, onClose, ...props }: Props) => {
  const dispatch = useDispatch();
  const [{ palette }] = useAppColors();
  const [t] = useTranslation("App");

  const handleDelete = () => {
    if (onClose) onClose({}, "backdropClick");
    dispatch(newsDeletePosts([newsPostId]));
  };

  return (
    <Menu
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        p: 1,
      }}
      {...props}
    >
      <MenuItem
        onClick={handleDelete}
        sx={{
          color: palette.red[500],
        }}
      >
        {t("Dialogs.DeleteButton", "Delete")}
      </MenuItem>
    </Menu>
  );
};

export default NewsPostDropdown;
