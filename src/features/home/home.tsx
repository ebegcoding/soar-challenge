import { AppShell } from "@/components/layouts";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <AppShell
      header={{ height: "100px" }}
      navbar={{ width: "250px" }}
      background="white"
      padding={{ x: "40px", y: "30px" }}
      borderColor="#E6EFF5"
    >
      <AppShell.Header>header</AppShell.Header>
      <AppShell.Navbar>navbar</AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
