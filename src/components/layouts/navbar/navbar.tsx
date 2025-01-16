import { LayoutGroup } from "framer-motion";
import { AppShell } from "../app-shell";
import { links } from "./navbar.constants";
import {
  StyledActiveIndicator,
  StyledContainer,
  StyledLogo,
  StyledNavLink,
  StyledNavLinksContainer,
} from "./navbar.styles";

import { IconIconsFilled } from "@tabler/icons-react";
import { NavbarItemProps } from "./navbar.types";
import { Header } from "../header";

export const Navbar = () => {
  return (
    <AppShell.Navbar>
      <StyledContainer>
        <StyledLogo>
          <IconIconsFilled size={35} />
          Soar task
        </StyledLogo>
        <LayoutGroup>
          <StyledNavLinksContainer>
            {links.map(({ to, end, ...item }) => (
              <StyledNavLink key={to} to={to} end={end}>
                {({ isActive }) => <NavbarItem isActive={isActive} {...item} />}
              </StyledNavLink>
            ))}
          </StyledNavLinksContainer>
        </LayoutGroup>
      </StyledContainer>
    </AppShell.Navbar>
  );
};

const NavbarItem = ({ isActive, title, icon: Icon }: NavbarItemProps) => {
  return (
    <>
      {isActive && (
        <>
          <Header.Title value={title} />
          <StyledActiveIndicator layoutId="indicator" />
        </>
      )}
      <Icon />
      {title}
    </>
  );
};
