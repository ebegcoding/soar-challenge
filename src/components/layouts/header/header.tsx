import {
  StyledActions,
  StyledButton,
  StyledContainer,
  StyledSearch,
  StyledTitleContainer,
} from "./header.styles";
import { Avatar, Input, Portal } from "@/components/atoms";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useResponsiveValue } from "@/hooks/use-responsive-value";
import { IconBell, IconSearch, IconSettings } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

export const Header = ({ avatar, name }: { avatar: string; name: string }) => {
  const size = useResponsiveValue({ base: "35px", tablet: "60px" });
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledTitleContainer id="soar-header-title"></StyledTitleContainer>
      <StyledSearch>
        <Input
          leftSection={<IconSearch size={20} />}
          leftSectionWidth="60px"
          placeholder="Search for something"
        />
      </StyledSearch>
      <StyledActions>
        <StyledButton>
          <IconSettings size={24} color={theme.colors.b50} />
        </StyledButton>
        <StyledButton>
          <IconBell size={24} color={theme.colors.accent} />
        </StyledButton>
        <Link to="/settings">
          <Avatar src={avatar} size={size} username={name} />
        </Link>
      </StyledActions>
    </StyledContainer>
  );
};

Header.Title = ({ value }: { value: string }) => {
  useDocumentTitle(value);

  return (
    <Portal target={"#soar-header-title"}>
      <h1>{value}</h1>
    </Portal>
  );
};
