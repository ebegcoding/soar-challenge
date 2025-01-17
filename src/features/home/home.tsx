import { AppShell, Header, Navbar } from "@/components/layouts";
import { Outlet } from "react-router-dom";
import { useResponsiveValue } from "@/hooks/use-responsive-value";
import { ComponentProps } from "react";
import { useGetProfileQuery } from "../settings/profile/profile.slice";
import invariant from "tiny-invariant";

export const Home = () => {
  const { data, isLoading } = useGetProfileQuery();

  const { header, padding } = useResponsiveValue<
    Pick<ComponentProps<typeof AppShell>, "header" | "padding">
  >({
    base: {
      header: {
        height: "140px",
        padding: {
          x: "25px",
          y: "20px",
        },
      },
      padding: { x: "25px", y: "25px" },
    },
    tablet: {
      header: {
        height: "100px",
        padding: {
          x: "40px",
          y: "20px",
        },
      },
      padding: { x: "40px", y: "30px" },
    },
  });

  if (isLoading) {
    return "Loading";
  }

  invariant(data);

  return (
    <AppShell
      header={header}
      navbar={{ width: "250px" }}
      background="white"
      padding={padding}
      borderColor="#E6EFF5"
    >
      <Header avatar={data.avatar} />
      <Navbar />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
