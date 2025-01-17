import styled from "styled-components";

export const StyledContainer = styled.div<{ $size: string; $src?: string }>`
  height: ${(props) => props.$size};
  width: ${(props) => props.$size};
  border-radius: ${(props) => props.$size};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => `calc(${props.$size} / 2.5)`};

  background-image: ${(props) => (props.$src ? `url(${props.$src})` : "")};
  background-color: ${({ theme }) => theme.colors.b10};

  background-size: cover;
`;
