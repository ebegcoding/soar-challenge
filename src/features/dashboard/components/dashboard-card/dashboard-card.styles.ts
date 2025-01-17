import styled from "styled-components";

export const StyledContainer = styled.div<{ $area: string }>`
  grid-area: ${(props) => props.$area};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
