import { ReactNode } from "react";
import { useAppShellContext } from "../app-shell.context";
import { StyledHeader } from "../app-shell.styles";

export const AppShellHeader = ({
  children,
}: {
  children: NonNullable<ReactNode>;
}) => {
  useAppShellContext();

  return <StyledHeader>{children}</StyledHeader>;
};
