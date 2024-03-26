import { Box, Button, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Title from "../../components/Title";

export default function Dashboard() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Adjust breakpoint as needed

  return (
    <Box
      style={{
        width: "calc(100% - 64x)",
        marginLeft: "64px",
        padding: "0 15px",
      }}
    >
      <Title title={"Dashboard"} subTile={"Welcome To Your Dashboard"} />

      <Box
        sx={{
          textAlign: isSmallScreen ? "center" : "right",
          marginBottom: "10px",
        }}
      >
        <Button
          sx={{
            padding: "6px 8px",
            textTransform: "capitalize",
            fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
          }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined sx={{ fontSize: isSmallScreen && "1.2rem" }} />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
