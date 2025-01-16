import styled from "styled-components";
import { AppShellStyledProps } from "./app-shell.types";

export const StyledMain = styled.main`
  padding-inline-start: calc(
    var(--app-shell-navbar-width) + var(--app-shell-padding-x)
  );
  padding-inline-end: var(--app-shell-padding-x);
  padding-top: calc(
    var(--app-shell-header-height) + var(--app-shell-padding-y)
  );
  padding-bottom: var(--app-shell-padding-y);
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors?.body};
`;

export const StyledHeader = styled.header`
  position: fixed;
  inset-inline-start: var(--app-shell-navbar-width);
  inset-inline-end: 0;
  top: 0;
  height: var(--app-shell-header-height);
  z-index: var(--app-shell-z-index);
  background-color: var(--app-shell-background, transparent);
`;

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  inset-block: 0;
  inset-inline-start: 0;
  width: var(--app-shell-navbar-width);
  z-index: calc(var(--app-shell-z-index) + 1);
  background-color: var(--app-shell-background, transparent);
`;

export const StyledContainer = styled.div<AppShellStyledProps>`
  --app-shell-header-height: ${(props) => props.headerHeight};
  --app-shell-navbar-width: ${(props) => props.navbarWidth};
  --app-shell-z-index: ${(props) => props.zIndex};
  --app-shell-border-color: ${(props) => props.borderColor};
  --app-shell-background: ${(props) => props.background};
  --app-shell-padding-x: ${(props) => props.padding.x};
  --app-shell-padding-y: ${(props) => props.padding.y};

  ${StyledHeader} {
    border-bottom: ${(props) =>
      props.borderColor ? "1px solid var(--app-shell-border-color)" : 0};
  }

  ${StyledNavbar} {
    border-inline-end: ${(props) =>
      props.borderColor ? "1px solid var(--app-shell-border-color)" : 0};
  }
`;
