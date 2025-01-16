import { ReactNode } from "react";
import { useAppShellContext } from "../app-shell.context";
import { StyledNavbar } from "../app-shell.styles";

export const AppShellNavbar = ({
  children,
}: {
  children: NonNullable<ReactNode>;
}) => {
  useAppShellContext();

  return <StyledNavbar>{children}</StyledNavbar>;
};
