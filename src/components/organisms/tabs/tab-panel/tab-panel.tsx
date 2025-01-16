import { useTabsContext } from "../tabs.context";
import { StyledContainer } from "./tab-panel.styles";
import { TabPanelProps } from "./tab-panel.types";

export const TabPanel = <T extends string>({
  value,
  children,
}: TabPanelProps<T>) => {
  const { active, getId } = useTabsContext();

  if (active !== value) {
    return null;
  }

  return (
    <StyledContainer
      role="tabpanel"
      id={getId(value, "panel")}
      aria-labelledby={getId(value, "tab")}
    >
      {children}
    </StyledContainer>
  );
};
