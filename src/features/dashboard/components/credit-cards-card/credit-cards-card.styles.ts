import styled from "styled-components";

export const StyledContainer = styled.div`
  grid-area: cards;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 17px;
    font-weight: ${({ theme }) => theme.font.weights.bold};
    color: ${({ theme }) => theme.colors.b90};
    line-height: 21px;

    &:hover {
      color: ${({ theme }) => theme.colors.b50};
    }
  }
`;
