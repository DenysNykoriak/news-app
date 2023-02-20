import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Tooltip,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import React from "react";
import { useAppColors } from "../../logic/theme";

type Props = {
  open: boolean;
  subtitle: string;
  handleClose: () => void;
  handleConsent?: () => void;
};

const ConfirmationDialog = ({
  open,
  subtitle,
  handleConsent,
  handleClose,
}: Props) => {
  const [{ palette }] = useAppColors();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: "20px",
        },
      }}
    >
      <DialogTitle
        sx={{
          mb: 1,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography variant="h4">{subtitle}</Typography>
          <Tooltip title="Please, confirm this action" placement="top-start">
            <HelpOutlineOutlinedIcon
              sx={{
                color: palette.grey[300],
              }}
            />
          </Tooltip>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack
          sx={{
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            sx={{
              color: palette.white[100],
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleConsent}
            sx={{
              color: palette.white[100],
            }}
          >
            Consent
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
