import { Outlet, useMatch, useNavigate } from "react-router-dom";

import { makeTabs } from "@/components/organisms/tabs";
import { useResponsiveValue } from "@/hooks/use-responsive-value";

type SettingsTabs = "" | "preferences" | "security";

const Tabs = makeTabs<SettingsTabs>();

export const Settings = () => {
  const navigate = useNavigate();

  const gap = useResponsiveValue({ base: "30px", tablet: "42px" });

  const match = useMatch({
    path: "/settings/:tab",
    end: false,
  });

  return (
    <Tabs
      value={(match?.params.tab as SettingsTabs) ?? ""}
      onChange={(value) => {
        navigate(`/settings/${value}`);
      }}
    >
      <Tabs.List
        gap={gap}
        data={[
          { value: "", label: "Edit Profile" },
          { value: "preferences", label: "Preferences" },
          { value: "security", label: "Security" },
        ]}
      />
      <Outlet />
    </Tabs>
  );
};
