import { createScopedKeydownHandler } from "@/utils/accessibility";
import { useTabsContext } from "../tabs.context";
import {
  StyledContainer,
  StyledTab,
  StyledTabIndicator,
} from "./tab-list.styles";
import { TabListProps, TabProps } from "./tab-list.types";
import { LayoutGroup } from "framer-motion";

export const TabList = <T extends string>({ data, gap }: TabListProps<T>) => {
  const { getId } = useTabsContext();
  return (
    <LayoutGroup id={getId("", "list")}>
      <StyledContainer role="tablist" aria-orientation="horizontal" $gap={gap}>
        {data.map((item) => (
          <Tab key={item.value} {...item} />
        ))}
      </StyledContainer>
    </LayoutGroup>
  );
};

const Tab = <T extends string>({
  value,
  label,
  disabled,
  onClick,
  onKeyDown,
}: TabProps<T>) => {
  const {
    active,
    onChange,
    getId,
    disabled: parentDisabled,
  } = useTabsContext();

  const selected = active === value;

  return (
    <StyledTab
      disabled={disabled || parentDisabled}
      onClick={(e) => {
        onChange(value);
        onClick?.(e);
      }}
      role="tab"
      id={getId(value, "tab")}
      tabIndex={+!selected * -1}
      aria-controls={getId(value, "panel")}
      aria-selected={selected}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        onKeyDown,
      })}
    >
      {label}
      {selected ? <StyledTabIndicator layoutId="indicator" /> : null}
    </StyledTab>
  );
};
