import { sprinkles } from "@/theme/sprinkles";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: var(--app-shell-header-height) 1fr;
  height: 100%;

  @media screen and ${sprinkles.smallerThan("tablet")} {
    display: flex;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 36px;
  gap: 10px;

  font-size: 25px;
  font-weight: 800;
  line-height: 30px;

  @media screen and ${sprinkles.smallerThan("tablet")} {
    display: none;
  }
`;

export const StyledNavLinksContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-block: 14px;
`;

export const StyledNavLink = styled(NavLink)`
  transition: color 200ms;
  min-height: 60px;
  padding-inline: 40px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 26px;

  font-size: 18px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.dimmed};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.b100};
  }
`;

export const StyledActiveIndicator = styled(motion.span)`
  position: absolute;
  inset-block: 0;
  left: 0;
  width: 6px;
  background-color: ${({ theme }) => theme.colors.b100};
  border-radius: 0 10px 10px 0;
`;
