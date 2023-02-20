import { useState } from "react";

interface DialogProps {
  handleClose?: () => void;
}

interface ConfirmationDialogProps extends DialogProps {
  handleConsent?: () => void;
}

export const useDialog = ({ handleClose }: DialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
    if (handleClose) handleClose();
  };
  const handleDialogOpen = () => setDialogOpen(true);

  return {
    dialogOpen,
    handleDialogClose,
    handleDialogOpen,
  };
};

export const useConfirmationDialog = ({
  handleClose,
  handleConsent,
}: ConfirmationDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => {
    setDialogOpen(false);
    if (handleClose) handleClose();
  };
  const handleDialogConsent = () => {
    setDialogOpen(false);
    if (handleConsent) handleConsent();
  };

  return {
    dialogOpen,
    handleDialogOpen,
    handleDialogClose,
    handleDialogConsent,
  };
};
