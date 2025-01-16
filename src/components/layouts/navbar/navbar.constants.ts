import {
  TablerIcon,
  IconHomeFilled,
  IconTransactionDollar,
  IconUserFilled,
  IconBuildingBank,
  IconCreditCardFilled,
  IconBusinessplan,
  IconTools,
  IconBulbFilled,
  IconSettingsFilled,
} from "@tabler/icons-react";

type NavLinkItem = {
  title: string;
  icon: TablerIcon;
  to: string;
  end?: boolean;
};

export const links: NavLinkItem[] = [
  {
    title: "Dashboard",
    icon: IconHomeFilled,
    to: "/",
    end: true,
  },
  {
    title: "Transactions",
    icon: IconTransactionDollar,
    to: "/transactions",
  },
  {
    title: "Accounts",
    icon: IconUserFilled,
    to: "/accounts",
  },
  {
    title: "Investments",
    icon: IconBusinessplan,
    to: "/investments",
  },
  {
    title: "Credit Cards",
    icon: IconCreditCardFilled,
    to: "/cards",
  },
  {
    title: "Loans",
    icon: IconBuildingBank,
    to: "/loans",
  },
  {
    title: "Services",
    icon: IconTools,
    to: "/services",
  },
  {
    title: "My Privilleges",
    icon: IconBulbFilled,
    to: "/privileges",
  },
  {
    title: "Setting",
    icon: IconSettingsFilled,
    to: "/settings",
  },
];
