import { CSSProperties } from "react";
import styled from "styled-components";

export const Paper = styled.div<{
  $padding: {
    x: CSSProperties["paddingInline"];
    y: CSSProperties["paddingBlock"];
  };
}>`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.b0};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${(props) => `${props.$padding.y} ${props.$padding.x}`};
`;
