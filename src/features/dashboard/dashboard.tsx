import {
  ContactsCard,
  CreditCardsCard,
  DashboardCard,
  TransactionsCard,
} from "./components";
import { StyledContainer } from "./dashboard.styles";

export const Dashboard = () => {
  return (
    <StyledContainer>
      <CreditCardsCard />
      <TransactionsCard />
      <DashboardCard title="Weekly Activity" area="activity">
        activity
      </DashboardCard>
      <DashboardCard title="Expense Statistics" area="expenses">
        expenses
      </DashboardCard>
      <ContactsCard />
      <DashboardCard title="Balance History" area="balance">
        balance
      </DashboardCard>
    </StyledContainer>
  );
};
