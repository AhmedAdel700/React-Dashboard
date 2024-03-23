import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../../data";
export default function Invoices() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "calc(100% - 64x)",
          marginLeft: "64px",
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
            checkboxSelection // to add a checkbox
          />
        </div>
      </div>
    </>
  );
}
