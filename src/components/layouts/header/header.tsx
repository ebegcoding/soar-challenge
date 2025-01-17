import { StyledContainer } from "./header.styles";
import { Avatar, Portal } from "@/components/atoms";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useResponsiveValue } from "@/hooks/use-responsive-value";

export const Header = ({ avatar, name }: { avatar: string; name: string }) => {
  const size = useResponsiveValue({ base: "35px", tablet: "60px" });

  return (
    <StyledContainer id="soar-header">
      <Avatar src={avatar} size={size} username={name} />
    </StyledContainer>
  );
};

Header.Title = ({ value }: { value: string }) => {
  useDocumentTitle(value);

  return (
    <Portal target={"#soar-header"}>
      <h1>{value}</h1>
    </Portal>
  );
};
