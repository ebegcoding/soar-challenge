import { ReactNode } from "react";
import { StyledContainer } from "./dashboard-card.styles";
import { Paper } from "@/components/layouts";

export const DashboardCard = ({
  area,
  title,
  children,
  minHeight,
}: {
  minHeight?: string;
  area: string;
  title: string;
  children: NonNullable<ReactNode>;
}) => {
  return (
    <StyledContainer $area={area} $minHeight={minHeight}>
      <h2>{title}</h2>
      <Paper $padding={{ x: "18px", y: "20px" }}>{children}</Paper>
    </StyledContainer>
  );
};
