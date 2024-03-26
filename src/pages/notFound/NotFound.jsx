import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        width: "calc(100% - 64x)",
        marginLeft: "64px",
        textAlign: "center",
        mt: "2rem",
      }}
    >
      <Typography variant="h5" color={"error"} textAlign={"center"}>
        The Page Your Are Looking For Is Not Found
      </Typography>
      <Link to="/">
        <Button sx={{ mt: "2rem" }} variant="contained">
          Back To Dashboard
        </Button>
      </Link>
    </Box>
  );
}
