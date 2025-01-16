import { AppShell } from "@/components/layouts";
import { Outlet } from "react-router-dom";
import { useResponsiveValue } from "@/hooks/use-responsive-value";

export const Home = () => {
  const headerHeight = useResponsiveValue({ base: "140px", tablet: "100px" });

  return (
    <AppShell
      header={{ height: headerHeight }}
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
