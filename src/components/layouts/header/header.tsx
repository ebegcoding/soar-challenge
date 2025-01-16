import { useGetProfileQuery } from "@/features/settings/profile/profile.slice";
import { StyledContainer } from "./header.styles";

export const Header = () => {
  const { data } = useGetProfileQuery();

  return (
    <StyledContainer id="soar-header">
      <div />
    </StyledContainer>
  );
};
