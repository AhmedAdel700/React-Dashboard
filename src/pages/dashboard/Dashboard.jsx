import { Box, Button } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <Box
      style={{
        width: "calc(100% - 64x)",
        marginLeft: "64px",
        padding: "0 15px",
      }}
    >
      <Box sx={{ textAlign: "right", marginBottom: "10px" }}>
        <Button
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
