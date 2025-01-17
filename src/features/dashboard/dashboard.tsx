import {
  ActivityCard,
  BalanceCard,
  ContactsCard,
  CreditCardsCard,
  ExpensesCard,
  TransactionsCard,
} from "./components";
import { StyledContainer } from "./dashboard.styles";

export const Dashboard = () => {
  return (
    <StyledContainer>
      <CreditCardsCard />
      <TransactionsCard />
      <ActivityCard />
      <ExpensesCard />
      <ContactsCard />
      <BalanceCard />
    </StyledContainer>
  );
};
