import { Outlet, useMatch, useNavigate } from "react-router-dom";

import { makeTabs } from "@/components/organisms/tabs";

type SettingsTabs = "" | "preferences" | "security";

const Tabs = makeTabs<SettingsTabs>();

export const Settings = () => {
  const navigate = useNavigate();
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
