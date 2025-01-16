import { useGetProfileQuery } from "@/features/settings/profile/profile.slice";
import { StyledContainer } from "./header.styles";
import { Portal } from "@/components/atoms";
import { useDocumentTitle } from "@/hooks/use-document-title";

export const Header = () => {
  const { data } = useGetProfileQuery();

  return (
    <StyledContainer id="soar-header">
      <div />
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
