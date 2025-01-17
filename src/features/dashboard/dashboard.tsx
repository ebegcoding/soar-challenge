import { lazy, Suspense } from "react";
import { ContactsCard, CreditCardsCard, TransactionsCard } from "./components";
import { StyledContainer } from "./dashboard.styles";

const BalanceCard = lazy(() =>
  import("./components/balance-card/balance-card").then((module) => ({
    default: module.BalanceCard,
  }))
);

const ActivityCard = lazy(() =>
  import("./components/activity-card/activity-card").then((module) => ({
    default: module.ActivityCard,
  }))
);

const ExpensesCard = lazy(() =>
  import("./components/expenses-card/expenses-card").then((module) => ({
    default: module.ExpensesCard,
  }))
);

export const Dashboard = () => {
  return (
    <StyledContainer>
      <CreditCardsCard />
      <TransactionsCard />
      <Suspense>
        <ActivityCard />
        <ExpensesCard />
      </Suspense>
      <ContactsCard />
      <Suspense>
        <BalanceCard />
      </Suspense>
    </StyledContainer>
  );
};
