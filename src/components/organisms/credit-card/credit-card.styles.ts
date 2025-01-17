import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const StyledCardLabel = styled.p`
  margin: 0;
  color: var(--card-color);
  opacity: 0.7;

  font-size: 12px;
  font-weight: ${({ theme }) => theme.font.weights.light};
  line-height: 14.4px;

  @media screen and ${sprinkles.smallerThan("mobile")} {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const StyledCardValue = styled.p`
  margin: 0;
  color: var(--card-color);

  font-size: 15px;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: 18px;

  @media screen and ${sprinkles.smallerThan("mobile")} {
    font-size: 13px;
    line-height: 15px;
  }
`;

export const StyledContainer = styled.div<{ $dark: boolean }>`
  --card-color: ${(props) => props.theme.colors[props.$dark ? "b0" : "b100"]};
  --card-border: ${(props) =>
    props.$dark ? undefined : `1px solid ${props.theme.colors.border}`};

  background: ${(props) =>
    props.$dark
      ? "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)"
      : props.theme.colors.b0};

  border-radius: ${({ theme }) => theme.radius.md};
  height: 235px;
  width: 350px;
  min-width: 350px;

  display: flex;
  flex-direction: column;

  border: var(--card-border);

  svg {
    height: 30px;
  }

  @media screen and ${sprinkles.smallerThan("mobile")} {
    height: 170px;
    width: 265px;
    min-width: 265px;
  }
`;

export const StyledCardTop = styled.div`
  flex: 1;
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 33px;

  @media screen and ${sprinkles.smallerThan("mobile")} {
    padding: 20px;
    gap: 23px;
  }
`;

export const StyledCardTopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledCardValue} {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and ${sprinkles.smallerThan("mobile")} {
    ${StyledCardValue} {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

export const StyledCardDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledCardBottom = styled.div`
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  padding-inline: 25px;
  padding-block: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: var(--card-border);

  ${StyledCardValue} {
    font-size: 22px;
    line-height: 26.4px;
  }

  @media screen and ${sprinkles.smallerThan("mobile")} {
    padding-inline: 20px;
    padding-block: 16px;

    ${StyledCardValue} {
      font-size: 15px;
      line-height: 18px;
    }
  }
`;
