import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Button,
} from "@mui/material";
import LineChart from "../lineChart/LineChart";
import { DownloadOutlined } from "@mui/icons-material";
import { recentTransactions } from "./data";

export default function Row2() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Adjust breakpoint as needed

  const recentTransactionsList = recentTransactions.map((transaction) => {
    return (
      <Paper
        key={transaction.txTd}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "10px",
          alignItems: "center",
          padding: "0 10px",
          height: "60px",
        }}
      >
        <Typography>{transaction.user}</Typography>
        <Typography>{transaction.date}</Typography>
        <Button variant="contained" color="error">
          ${transaction.cost}
        </Button>
      </Paper>
    );
  });

  return (
    <Stack direction={"row"} marginTop={1.2} flexWrap={"wrap"} gap={1.2}>
      <Paper
        sx={{
          flex: 1,
          maxWidth: "900px",
          width: isSmallScreen ? "290px" : "100%", // Adjust width for small screens
        }}
      >
        <Stack
          direction={"row"}
          marginTop={1.2}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={1}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineChart isDashboard={true} />
      </Paper>

      <Box
        sx={{
          flex: "1",
          minWidth: "200px",
          maxHeight: "380px",
          overflow: "auto",
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {recentTransactionsList}
      </Box>
    </Stack>
  );
}
