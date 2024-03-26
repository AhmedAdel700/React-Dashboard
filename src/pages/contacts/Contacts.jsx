import { GridToolbar } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../../data";
import Title from "../../components/Title";
import { Box } from "@mui/material";

export default function Contacts() {
  return (
    <Box
      sx={{ width: "calc(100% - 64x)", marginLeft: "64px",}}
    >
      <Box margin="0 15px">
        <Title title={"Contact"} subTile={"List Of Contacts For Future Reference"} />
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0 0 0",
        }}
      >
        <div
          style={{
            height: 600,
            width: "100%",
            margin: " -0.25rem 1.2rem 0.5rem",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            sx={{ margin: "auto" }}
            slots={{ toolbar: GridToolbar }} // this is the filter componenets
          />
        </div>
      </div>
    </Box>
  );
}
