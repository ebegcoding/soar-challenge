import { AppShellHeader } from "./app-shell-header";
import { AppShellMain } from "./app-shell-main";
import { AppShellNavbar } from "./app-shell-navbar";
import { AppShellProvider } from "./app-shell.context";
import { StyledContainer } from "./app-shell.styles";
import { AppShellProps } from "./app-shell.types";

const privateKey = Symbol("isolate-app-shell");

export const AppShell = ({
  borderColor,
  background,
  children,
  zIndex = 200,
  header,
  navbar,
  padding,
}: AppShellProps) => {
  return (
    <AppShellProvider value={privateKey}>
      <StyledContainer
        $borderColor={borderColor}
        $background={background}
        $zIndex={zIndex}
        $headerHeight={header?.height ?? 0}
        $headerPadding={{
          x: header?.padding?.x ?? 0,
          y: header?.padding?.y ?? 0,
        }}
        $navbarWidth={navbar?.width ?? 0}
        $padding={{
          x: padding?.x ?? 0,
          y: padding?.y ?? 0,
        }}
      >
        {children}
      </StyledContainer>
    </AppShellProvider>
  );
};

AppShell.Header = AppShellHeader;
AppShell.Navbar = AppShellNavbar;
AppShell.Main = AppShellMain;
