import styled from "styled-components";

export const StyledContainer = styled.div<{ $error: boolean }>`
  --input-wrapper-border-color: ${({ theme, $error }) =>
    $error ? theme.colors.error : theme.colors.border};
  --input-wrapper-text-color: ${({ theme, $error }) =>
    $error ? theme.colors.error : theme.colors.b50};

  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 10px;
  }
`;

export const StyledError = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 4px;
`;
