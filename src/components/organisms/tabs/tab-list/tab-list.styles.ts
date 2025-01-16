import { UnstyledButton } from "@/components/atoms";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledTab = styled(UnstyledButton)<{ $active: boolean }>`
  position: relative;
`;

export const StyledTabIndicator = styled(motion.span)`
  position: absolute;
  inset: 1;
  background: red;
  z-index: -1;
`;
