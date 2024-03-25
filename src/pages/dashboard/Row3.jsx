import { Paper, Stack, Typography, useTheme } from "@mui/material";
import PieChart from "../pieChart/PieChart";
import BarChart from "../barChart/BarChart";
import GeographChart from "../geographChart/GeographChart";

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={1} mt={1.2} mb={1.2} flexWrap={"wrap"}>
      <Paper sx={{ width: "33%", flex: 1, minWidth: "290px" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px ", fontWeight: "600" }}
          variant="h6"
        >
          Campaign
        </Typography>
        <PieChart isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 Revenue Generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes Extra Misc Expenditures And Costs
        </Typography>
      </Paper>
      <Paper sx={{ width: "32%", flex: 1, minWidth: "290px" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px ", fontWeight: "600" }}
          variant="h6"
        >
          Sales Quantiti
        </Typography>
        <BarChart isDashboard={true} />
      </Paper>
      <Paper sx={{ width: "33%", flex: 1, minWidth: "290px" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{
            padding: "30px 30px 0 30px ",
            fontWeight: "600",
            mt: "-8px",
            mb: "15px",
          }}
          variant="h6"
        >
          Geography Based Traffic
        </Typography>
        <GeographChart isDashboard={true} />
      </Paper>
    </Stack>
  );
}
