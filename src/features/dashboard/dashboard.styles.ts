import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-areas: "cards cards transactions" "activity activity expenses" "contacts balance balance";
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  column-gap: 30px;
  row-gap: 24px;

  @media screen and ${sprinkles.smallerThan("tablet")} {
    display: flex;
    flex-direction: column;
    row-gap: 22px;
    min-width: unset;
  }
`;
