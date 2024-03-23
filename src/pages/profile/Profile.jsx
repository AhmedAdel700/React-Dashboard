import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

export default function Profile() {
  const [role, setRole] = useState("");

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleClick;

  return (
    <div
      style={{
        display: "flex",
        width: "calc(100% - 64x)",
        marginLeft: "64px",
      }}
    >
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "fitContent" },
          display: "flex",
          flexDirection: "column",
          width: "98%",
          margin: "auto",
          gap: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" sx={{ gap: 2 }}>
          <TextField
            id="first-name"
            label="First Name"
            variant="filled"
            sx={{ flex: 1 }}
            error={errors.firstName}
            helperText={
              errors.firstName
                ? "This Field Can't Be Empty Or Less Than 3 Characters"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="filled"
            sx={{ flex: 1 }}
            error={errors.lastName}
            helperText={
              errors.lastName
                ? "This Field Can't Be Empty Or Less Than 3 Characters"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
          />
        </Stack>

        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          error={errors.email}
          helperText={errors.email ? "Write A Valid Email Please" : null}
          {...register("email", { required: true, pattern: emailRegex })}
        />
        <TextField
          id="filled-basic"
          label="Contact Number"
          variant="filled"
          error={errors.contactNumber}
          helperText={errors.contactNumber ? "This Field Is Required" : null}
          {...register("contactNumber", {
            required: true,
            pattern: phoneRegex,
          })}
        />
        <TextField
          id="filled-basic"
          label="Address 1"
          variant="filled"
          error={errors.address1}
          helperText={errors.address1 ? "This Field Is Required" : null}
          {...register("address1", { required: true, minLength: 10 })}
        />
        <TextField
          id="filled-basic"
          label="Address 2"
          variant="filled"
          error={errors.address2}
          helperText={errors.address2 ? "This Field Is Required" : null}
          {...register("address2", { required: true, minLength: 10 })}
        />

        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={role}
            onChange={handleChange}
            label="Role"
            variant="filled"
          >
            <MenuItem value="role">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
          </Select>
        </FormControl>

        <Box>
          <Button type="submit" variant="contained" sx={{ float: "right" }}>
            Create New User
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Account Created Successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
}
