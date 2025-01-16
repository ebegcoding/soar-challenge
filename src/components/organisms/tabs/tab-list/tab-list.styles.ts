import { UnstyledButton } from "@/components/atoms";
import { sprinkles } from "@/theme/sprinkles";
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import styled from "styled-components";

export const StyledContainer = styled.div<{ $gap: CSSProperties["gap"] }>`
  display: flex;
  column-gap: ${(props) => props.$gap};
  flex-wrap: wrap;
  align-items: center;

  border-bottom: ${sprinkles.border};
`;

export const StyledTab = styled(UnstyledButton)`
  transition: color 200ms;
  position: relative;
  padding-bottom: 10px;
  padding-inline: 16px;
  font-size: 16px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.b50};

  &:hover,
  &[aria-selected="true"] {
    color: ${({ theme }) => theme.colors.b100};
  }

  @media screen and ${sprinkles.smallerThan("mobile")} {
    font-size: 13px;
    line-height: 16px;
    padding-bottom: 8px;
    padding-inline: 6px;
  }
`;

export const StyledTabIndicator = styled(motion.span)`
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.b100};
  border-radius: 10px 10px 0 0;
`;
