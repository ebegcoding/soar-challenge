import { TabsContext, TabsProps } from "./tabs.types";
import { TabsProvider } from "./tabs.context";
import { useUncontrolled } from "@/hooks/use-uncontrolled";
import { StyledContainer } from "./tabs.styles";
import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import { useId, useMemo } from "react";

const Tabs = <T extends string>({
  id,
  value,
  defaultValue,
  onChange,
  children,
  disabled,
}: TabsProps<T>) => {
  const _id = useId() ?? id;

  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const memoizedContext = useMemo<TabsContext>(
    () => ({
      active: currentTab,
      disabled,
      onChange: (value) => {
        setCurrentTab(value as T);
      },
      getId(value, type) {
        return `${_id}-${type}-${value}`;
      },
    }),
    [currentTab, _id, disabled]
  );

  return (
    <TabsProvider value={memoizedContext}>
      <StyledContainer>{children}</StyledContainer>
    </TabsProvider>
  );
};

Tabs.List = TabList;
Tabs.Panel = TabPanel;

export const makeTabs = <T extends string>() =>
  Tabs as {
    (props: TabsProps<T>): JSX.Element;
    List: typeof Tabs.List<T>;
    Panel: typeof Tabs.Panel<T>;
  };
