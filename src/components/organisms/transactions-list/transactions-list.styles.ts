import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const StyledTransactionItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledTransactionTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.b100};
  color: ${({ theme }) => theme.font.weights.medium};
  font-size: 16px;
  line-height: 20px;
`;

export const StyledDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 15px;
  line-height: 18px;
  font-weight: ${({ theme }) => theme.font.weights.light};
  color: ${({ theme }) => theme.colors.b50};

  @media screen and ${sprinkles.smallerThan("mobile")} {
    gap: 4px;

    &,
    ${StyledTransactionTitle} {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export const StyledAmount = styled(StyledTransactionTitle)<{
  $positive: boolean;
}>`
  flex-shrink: 0;

  color: ${({ theme, $positive }) =>
    $positive ? theme.colors.success : theme.colors.error};

  @media screen and ${sprinkles.smallerThan("mobile")} {
    font-size: 12px;
    line-height: 14px;
  }
`;
