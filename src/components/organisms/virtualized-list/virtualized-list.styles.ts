import styled from "styled-components";

export const StyledItemContainer = styled.div<{
  $gap?: string;
  $horizontal?: boolean;
}>`
  padding-top: ${(props) => (!props.$horizontal ? props.$gap : undefined)};
  padding-left: ${(props) => (props.$horizontal ? props.$gap : undefined)};
`;
