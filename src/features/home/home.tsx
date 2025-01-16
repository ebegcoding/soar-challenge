import { AppShell, Header, Navbar } from "@/components/layouts";
import { Outlet } from "react-router-dom";
import { useResponsiveValue } from "@/hooks/use-responsive-value";
import { ComponentProps } from "react";

export const Home = () => {
  const header = useResponsiveValue<ComponentProps<typeof AppShell>["header"]>({
    base: {
      height: "140px",
      padding: {
        x: "25px",
        y: "20px",
      },
    },
    tablet: {
      height: "100px",
      padding: {
        x: "40px",
        y: "20px",
      },
    },
  });

  return (
    <AppShell
      header={header}
      navbar={{ width: "250px" }}
      background="white"
      padding={{ x: "40px", y: "30px" }}
      borderColor="#E6EFF5"
    >
      <Header />
      <Navbar />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
