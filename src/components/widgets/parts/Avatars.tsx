import { Avatar, AvatarGroup, AvatarGroupProps } from "@mui/material";
import random from "random";
import React from "react";
import { useAppColors } from "../../../logic/theme";

type Props = {
  letters: string[];
} & AvatarGroupProps;

const Avatars = ({ letters, ...props }: Props) => {
  const [{ palette }] = useAppColors();

  const getRandomColor = () => {
    const colors = [
      palette.brown[400],
      palette.green[500],
      palette.grey[400],
      palette.indigo[500],
      palette.orange[500],
      palette.brown[200],
      palette.green[300],
      palette.grey[200],
      palette.indigo[300],
      palette.orange[300],
    ];

    return colors[random.int(0, colors.length - 1)];
  };

  return (
    <AvatarGroup
      sx={(theme) => ({
        "& .MuiAvatar-root": {
          [theme.breakpoints.down("md")]: {
            width: 24,
            height: 24,
            fontSize: 14,
          },
        },
      })}
      {...props}
    >
      {letters.map((letter, index) => (
        <Avatar
          key={letter + index}
          sx={{
            bgcolor: getRandomColor(),
          }}
        >
          {letter}
        </Avatar>
      ))}
    </AvatarGroup>
  );
};

export default Avatars;
