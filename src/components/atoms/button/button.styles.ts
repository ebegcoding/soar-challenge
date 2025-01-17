import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const UnstyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: 0;
  appearance: none;
  text-align: left;
  text-decoration: none;
  color: inherit;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
`;

export const StyledButton = styled.button`
  transition: all 400ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 50px;
  padding-inline: 24px;
  border-radius: ${({ theme }) => theme.radius.sm};

  font-size: 18px;
  line-height: 22px;
  user-select: none;

  &:not([disabled]) {
    &,
    &:active {
      color: ${({ theme }) => theme.colors.b0};
      background-color: ${({ theme }) => theme.colors.b100};
      border: 1px solid ${({ theme }) => theme.colors.b100};
    }

    &:hover:not(:active) {
      color: ${({ theme }) => theme.colors.b100};
      background-color: ${({ theme }) => theme.colors.b0};
    }
  }

  @media screen and ${sprinkles.smallerThan("mobile")} {
    height: 40px;
    font-size: 15px;
    line-height: 20px;
  }
`;
