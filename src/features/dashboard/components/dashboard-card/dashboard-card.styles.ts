import { Paper } from "@/components/layouts";
import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const StyledContainer = styled.div<{
  $area: string;
  $minHeight: string;
}>`
  grid-area: ${(props) => props.$area};
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${Paper} {
    min-height: ${(props) => props.$minHeight};

    @media screen and ${sprinkles.smallerThan("tablet")} {
      min-height: ${(props) => props.$minHeight};
      height: ${(props) => props.$minHeight};
    }
  }
`;
