import { ReactNode } from "react";
import { useAppShellContext } from "../app-shell.context";
import { StyledNavbar } from "../app-shell.styles";
import { NavbarToggle } from "./components/navbar-toggle";

export const AppShellNavbar = ({
  children,
}: {
  children: NonNullable<ReactNode>;
}) => {
  useAppShellContext();

  return (
    <StyledNavbar>
      <NavbarToggle />
      {children}
    </StyledNavbar>
  );
};
