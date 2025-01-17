import { DashboardCard } from "./components";
import { StyledContainer } from "./dashboard.styles";

export const Dashboard = () => {
  return (
    <StyledContainer>
      <DashboardCard title="My cards" area="cards">
        cards
      </DashboardCard>
      <DashboardCard title="Recent Transactions" area="transactions">
        transactions
      </DashboardCard>
      <DashboardCard title="Weekly Activity" area="activity">
        activity
      </DashboardCard>
      <DashboardCard title="Expense Statistics" area="expenses">
        expenses
      </DashboardCard>
      <DashboardCard title="Quick Transfer" area="contacts">
        quick transfer
      </DashboardCard>
      <DashboardCard title="Balance History" area="balance">
        balance
      </DashboardCard>
    </StyledContainer>
  );
};
