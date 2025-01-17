import styled from "styled-components";
import { AppShellStyledProps } from "./app-shell.types";
import { sprinkles } from "@/theme/sprinkles";
import { UnstyledButton } from "@/components/atoms";

export const StyledNavbarToggle = styled(UnstyledButton)`
  display: none;

  @media screen and ${sprinkles.smallerThan("tablet")} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--app-shell-navbar-toggle-size) * 2);
    height: calc(var(--app-shell-navbar-toggle-size) * 2);
    border-radius: calc(var(--app-shell-navbar-toggle-size) * 2);
    margin-left: var(--app-shell-header-padding-x);
    margin-top: var(--app-shell-header-padding-y);
  }
`;

export const StyledMain = styled.main`
  transition: padding-inline-start var(--app-shell-transition-duration);
  padding-inline-start: calc(
    var(--app-shell-navbar-offset) + var(--app-shell-padding-x)
  );
  padding-inline-end: var(--app-shell-padding-x);
  padding-top: calc(
    var(--app-shell-header-height) + var(--app-shell-padding-y)
  );
  padding-bottom: var(--app-shell-padding-y);
  min-height: 100dvh;
`;

export const StyledHeader = styled.header`
  transition: inset-inline-start var(--app-shell-transition-duration);
  position: fixed;
  inset-inline-start: var(--app-shell-navbar-offset);
  inset-inline-end: 0;
  top: 0;
  height: var(--app-shell-header-height);
  z-index: var(--app-shell-z-index);
  background-color: var(--app-shell-background, transparent);
  padding-inline: var(--app-shell-header-padding-x);
  padding-block: var(--app-shell-header-padding-y);
`;

export const StyledNavbar = styled.nav`
  position: fixed;
  inset-block: 0;
  inset-inline-start: 0;
  width: var(--app-shell-navbar-width);
  z-index: calc(var(--app-shell-z-index) + 1);
  background-color: var(--app-shell-background, transparent);

  @media screen and ${sprinkles.smallerThan("tablet")} {
    transition: clip-path 500ms;
    clip-path: circle(
      var(--app-shell-navbar-toggle-size) at
        calc(
          var(--app-shell-navbar-toggle-size) +
            var(--app-shell-header-padding-x)
        )
        calc(
          var(--app-shell-navbar-toggle-size) +
            var(--app-shell-header-padding-y)
        )
    );

    &:has(${StyledNavbarToggle}[aria-selected="true"]) {
      clip-path: circle(100vh);

      // otherwise main is scrollable while the navbar is open in mobile
      @media screen and ${sprinkles.smallerThan("mobile")} {
        + ${StyledMain} {
          overflow: hidden;
          height: 100dvh;
        }
      }
    }
  }
`;

export const StyledContainer = styled.div<AppShellStyledProps>`
  --app-shell-navbar-toggle-size: 20px;
  --app-shell-header-height: ${(props) => props.$headerHeight};
  --app-shell-navbar-offset: ${(props) => props.$navbarWidth};
  --app-shell-navbar-width: ${(props) => props.$navbarWidth};
  --app-shell-z-index: ${(props) => props.$zIndex};
  --app-shell-border-color: ${(props) => props.$borderColor};
  --app-shell-background: ${(props) => props.$background};
  --app-shell-padding-x: ${(props) => props.$padding.x};
  --app-shell-padding-y: ${(props) => props.$padding.y};
  --app-shell-header-padding-x: ${(props) => props.$headerPadding.x};
  --app-shell-header-padding-y: ${(props) => props.$headerPadding.y};
  --app-shell-transition-duration: 300ms;

  ${StyledHeader} {
    border-bottom: ${(props) =>
      props.$borderColor ? "1px solid var(--app-shell-border-color)" : 0};
  }

  ${StyledNavbar} {
    border-inline-end: ${(props) =>
      props.$borderColor ? "1px solid var(--app-shell-border-color)" : 0};
  }

  @media screen and ${sprinkles.smallerThan("tablet")} {
    --app-shell-navbar-offset: 0px;
  }

  @media screen and ${sprinkles.smallerThan("mobile")} {
    --app-shell-navbar-width: 100dvw;
  }
`;
