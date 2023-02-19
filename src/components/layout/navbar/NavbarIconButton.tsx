import React from "react";
import {
  Tooltip,
  IconButton,
  TooltipProps,
  IconButtonProps,
} from "@mui/material";
import { useAppColors } from "../../../logic/theme";

type Props = {
  title: string;
  TooltipProps?: TooltipProps;
  children?: React.ReactNode;
} & IconButtonProps;

const NavbarIconButton = ({
  title,
  TooltipProps,
  children,
  ...props
}: Props) => {
  const [{ palette }] = useAppColors();

  return (
    <Tooltip title={title} {...TooltipProps}>
      <IconButton
        sx={{
          border: `2px solid ${palette.grey[300]}`,
          borderRadius: "10px",
        }}
        {...props}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default NavbarIconButton;
