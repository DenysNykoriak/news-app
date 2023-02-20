import { useState, MouseEvent } from "react";

export const useDropdown = <T extends HTMLElement>() => {
  const [anchorEl, setAnchorEl] = useState<T | null>(null);
  const [open, setOpen] = useState(false);

  return {
    dropdownOpen: open,
    dropdownAnchorEl: anchorEl,
    handleDropdownOpen: (e: MouseEvent<T>) => {
      setAnchorEl(e.currentTarget);
      setOpen(true);
    },
    handleDropdownToggle: (e: MouseEvent<T>) => {
      setAnchorEl(e.currentTarget);
      setOpen((prev) => !prev);
    },
    handleDropdownClose: () => setOpen(false),
  };
};
