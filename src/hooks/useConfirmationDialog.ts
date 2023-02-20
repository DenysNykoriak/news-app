import { useState } from "react";

type Props = {
  handleClose?: () => void;
  handleConsent?: () => void;
};

export const useConfirmationDialog = ({
  handleClose,
  handleConsent,
}: Props) => {
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
