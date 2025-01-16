import { ReactNode } from "react";
import { useAppShellContext } from "../app-shell.context";
import { StyledMain } from "../app-shell.styles";

export const AppShellMain = ({
  children,
}: {
  children: NonNullable<ReactNode>;
}) => {
  useAppShellContext();

  return <StyledMain>{children}</StyledMain>;
};
