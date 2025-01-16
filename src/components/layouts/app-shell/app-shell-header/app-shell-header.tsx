import { HTMLAttributes, ReactNode } from "react";
import { useAppShellContext } from "../app-shell.context";
import { StyledHeader } from "../app-shell.styles";

export const AppShellHeader = ({
  children,
  ...props
}: {
  children: NonNullable<ReactNode>;
} & Omit<HTMLAttributes<HTMLHeadElement>, "children">) => {
  useAppShellContext();

  return <StyledHeader {...props}>{children}</StyledHeader>;
};
