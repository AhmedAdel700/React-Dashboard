import { Outlet } from "react-router-dom";
import Header from "./header/Header";

// eslint-disable-next-line react/prop-types
export default function Layout({ mode, setMode }) {

  return (
    <>
      <Header setMode={setMode} mode={mode} />
      <Outlet />
    </>
  );
}
