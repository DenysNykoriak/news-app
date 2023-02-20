import React from "react";
import {
  Paper,
  Stack,
  Typography,
  Divider,
  IconButton,
  PaperProps,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import { NewsPostType } from "../../logic/store/slices/newsSlice";
import { useDropdown } from "../../hooks/useDropdown";
import NewsPostDropdown from "./NewsPostDropdown";

type Props = {
  newsPost: NewsPostType;
} & PaperProps;

const NewsPost = ({ newsPost, sx, ...props }: Props) => {
  const {
    dropdownOpen,
    dropdownAnchorEl,
    handleDropdownToggle,
    handleDropdownClose,
  } = useDropdown<HTMLButtonElement>();

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: "20px",
        ...sx,
      }}
      {...props}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
          }}
        >
          {newsPost.title}
        </Typography>
        <IconButton onClick={handleDropdownToggle}>
          <MoreVertOutlinedIcon />
        </IconButton>
        <NewsPostDropdown
          open={dropdownOpen}
          anchorEl={dropdownAnchorEl}
          onClose={handleDropdownClose}
          newsPostId={newsPost.id}
        />
      </Stack>
      <Typography variant="body1" gutterBottom>
        {newsPost.body}
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton>
            <KeyboardDoubleArrowUpOutlinedIcon />
          </IconButton>
          <Typography>{newsPost.reactions}</Typography>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem />
        {newsPost.tags.map((tag, index) => (
          <Typography key={tag + index}>#{tag}</Typography>
        ))}
      </Stack>
    </Paper>
  );
};

export default NewsPost;
