import { Outlet, useMatch, useNavigate } from "react-router-dom";

import { makeTabs } from "@/components/organisms/tabs";
import { useResponsiveValue } from "@/hooks/use-responsive-value";
import { Paper } from "@/components/layouts";
import { StyledTabPanel } from "./settings.styles";

type SettingsTabs = "" | "preferences" | "security";

const Tabs = makeTabs<SettingsTabs>();

export const Settings = () => {
  const navigate = useNavigate();

  const { gap, padding } = useResponsiveValue({
    base: { gap: "30px", padding: "20px" },
    tablet: { gap: "42px", padding: "30px" },
  });

  const match = useMatch({
    path: "/settings/:tab",
    end: false,
  });

  const activeTab = (match?.params.tab as SettingsTabs) ?? "";

  return (
    <Paper $padding={{ x: padding, y: padding }}>
      <Tabs
        id="settings"
        value={activeTab}
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
        <StyledTabPanel
          role="tabpanel"
          id={`settings-panel-${activeTab}`}
          aria-labelledby={`settings-tab-${activeTab}`}
        >
          <Outlet />
        </StyledTabPanel>
      </Tabs>
    </Paper>
  );
};
