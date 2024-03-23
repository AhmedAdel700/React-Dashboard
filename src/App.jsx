import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "@emotion/react";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./theme";
import { createTheme } from "@mui/material";
import Dashboard from "./pages/dashboard/Dashboard";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import ManageTeam from "./pages/manageTeam/ManageTeam";
import Profile from "./pages/profile/Profile";
import Calendar from "./pages/calendar/Calendar";
import FAQ from "./pages/faq/FAQ";
import BarChart from "./pages/barChart/BarChart";
import PieChart from "./pages/pieChart/PieChart";
import LineChart from "./pages/lineChart/LineChart";
import GeographChart from "./pages/geographChart/GeographChart";

export default function App() {
  const storedTheme = localStorage.getItem("theme");
  const currentMode = storedTheme ? JSON.parse(storedTheme) : "dark";
  const [mode, setMode] = useState(currentMode);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout setMode={setMode} mode={mode} />}>
        <Route index element={<Dashboard />} />
        <Route path="/team" element={<ManageTeam />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bar-chart" element={<BarChart />} />
        <Route path="/pie-chart" element={<PieChart />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="/geograph-chart" element={<GeographChart />} />
      </Route>
    )
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
