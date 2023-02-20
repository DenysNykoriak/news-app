import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  FormControl,
  FormLabel,
  InputBase,
  FormHelperText,
  styled,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useAppColors } from "../../logic/theme";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const LoginInput = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: "10px",
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)} ${theme.spacing(
    0.5
  )} ${theme.spacing(2)}`,
  "&.Mui-focused": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  "&.Mui-error": {
    border: `1px solid ${theme.palette.error.main}`,
  },
}));

const LoginDialog = ({ open, handleClose }: Props) => {
  const [{ palette, common: commonColors }] = useAppColors();
  const { login, rejectReason, user, clearRejectReason } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleFormChange =
    (field: "username" | "password") => (e: ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [field]: e.target.value,
      });
    };

  const handleFormClose = () => {
    handleClose();
    setForm({
      username: "",
      password: "",
    });
    clearRejectReason();
  };

  const handleLogin = () => {
    login(form.username, form.password);
  };

  useEffect(() => {
    if (!open) return;

    if (rejectReason && !user) {
      //Unsuccessful Login
      setForm({
        username: form.username,
        password: "",
      });
    } else if (user) {
      //Successful Login
      handleClose();
      setForm({
        username: "",
        password: "",
      });
      navigate("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, rejectReason]);

  return (
    <Dialog
      open={open}
      onClose={handleFormClose}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          py: 1,
          px: 2,
        },
      }}
    >
      <DialogTitle
        component={"header"}
        sx={{
          mb: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
          }}
        >
          Login
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Stack component="form">
          <FormControl error={Boolean(rejectReason)} sx={{ mb: 2 }}>
            <FormLabel
              htmlFor="username"
              sx={{
                mb: 1,
                color: commonColors.black,
              }}
            >
              Username
            </FormLabel>
            <LoginInput
              id="username"
              placeholder="admin"
              value={form.username}
              onChange={handleFormChange("username")}
            />
          </FormControl>
          <FormControl error={Boolean(rejectReason)} sx={{ mb: 2 }}>
            <FormLabel
              htmlFor="password"
              sx={{
                mb: 1,
                color: commonColors.black,
              }}
            >
              Password
            </FormLabel>
            <LoginInput
              type="password"
              id="password"
              placeholder="Some strong password"
              value={form.password}
              onChange={handleFormChange("password")}
            />
            <FormHelperText>{rejectReason}</FormHelperText>
          </FormControl>
          <Stack
            sx={{
              flexDirection: "row",
              gap: 3,
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleFormClose}
              sx={{
                color: palette.white[100],
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleLogin}
              sx={{
                color: palette.white[100],
              }}
            >
              Log in
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
