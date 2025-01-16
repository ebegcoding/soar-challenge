import { TablerIcon } from "@tabler/icons-react";

export type NavLinkItem = {
  title: string;
  icon: TablerIcon;
  to: string;
  end?: boolean;
};

export type NavbarItemProps = {
  isActive: boolean;
} & Pick<NavLinkItem, "icon" | "title">;
