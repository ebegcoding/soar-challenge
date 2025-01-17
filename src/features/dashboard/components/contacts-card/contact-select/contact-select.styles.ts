import { UnstyledButton } from "@/components/atoms";
import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const StyledContactName = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.b100};
  font-size: 16px;
  line-height: 20px;
`;

export const StyledContact = styled(UnstyledButton)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  transition: font-weight 200ms;

  color: ${({ theme }) => theme.colors.b50};
  font-weight: ${({ theme }) => theme.font.weights.light};
  font-size: 15px;
  line-height: 18px;

  &[aria-selected="true"] {
    font-weight: ${({ theme }) => theme.font.weights.bold};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and ${sprinkles.smallerThan("mobile")} {
    gap: 12px;

    &,
    ${StyledContactName} {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
