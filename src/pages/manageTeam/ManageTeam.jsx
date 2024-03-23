import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export default function ManageTeam() {
  const theme = useTheme();

  const rows = [
    {
      id: 1,
      name: "Tywin Lannister",
      email: "tywinlannister@gmail.com",
      age: "60",
      phone: "(770)464-1010",
      access: "Manager",
    },
    {
      id: 2,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: "35",
      phone: "(665)121-5454",
      access: "Admin",
    },
    {
      id: 3,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: "42",
      phone: "(421)314-2288",
      access: "Admin",
    },
    {
      id: 4,
      name: "Ferrara Frances",
      email: "ferrarafrances@gmail.com",
      age: "44",
      phone: "(543)124-0123",
      access: "User",
    },
    {
      id: 5,
      name: "Arya Stark",
      email: "aryastark@gmail.com",
      age: "16",
      phone: "(921)425-6742",
      access: "Manager",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: "150",
      phone: "(232)545-6583",
      access: "User",
    },
    {
      id: 7,
      name: "Jamie Lannister",
      email: "jamielannister@gmail.com",
      age: "45",
      phone: "(422)982-6793",
      access: "Admin",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: "36",
      phone: "(222)444-5555",
      access: "User",
    },
  ];

  // Field Poperty Is Required Must Have The Same Name
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: "150",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",

      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "100px",
              borderRadius: "3px",
              textAlign: "center",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Manager" && (
              <SecurityOutlined fontSize="small" sx={{ color: "#FFF" }} />
            )}

            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#FFF" }}
              />
            )}

            {access === "User" && (
              <LockOpenOutlined fontSize="small" sx={{ color: "#FFF" }} />
            )}

            <Typography sx={{ fontSize: "13px", color: "#FFF" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
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
        <DataGrid rows={rows} columns={columns} sx={{ margin: "auto" }} />
      </div>
    </div>
  );
}
