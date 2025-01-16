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
            {links.map((item) => (
              <StyledNavLink key={item.to} to={item.to} end={item.end}>
                {({ isActive }) => (
                  <>
                    {isActive && <StyledActiveIndicator layoutId="indicator" />}
                    <item.icon />
                    {item.title}
                  </>
                )}
              </StyledNavLink>
            ))}
          </StyledNavLinksContainer>
        </LayoutGroup>
      </StyledContainer>
    </AppShell.Navbar>
  );
};
