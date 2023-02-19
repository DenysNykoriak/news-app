import { ButtonBase, ButtonBaseProps } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import React from "react";
import { useAppColors } from "../logic/theme";

type Props = ButtonBaseProps;

const AddBox = ({ sx, ...props }: Props) => {
  const [{ palette }] = useAppColors();

  return (
    <ButtonBase
      sx={{
        border: `2px dashed ${palette.grey[400]}`,
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        p: 1,
        ...sx,
      }}
      {...props}
    >
      <AddOutlinedIcon
        sx={{
          color: palette.grey[400],
        }}
      />
    </ButtonBase>
  );
};

export default AddBox;
