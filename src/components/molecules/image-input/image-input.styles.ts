import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;

  input[type="file"][disabled] + label {
    pointer-events: none;
  }

  label {
    width: min-content;
    position: absolute;
    right: -8px;
    bottom: -1px;
    cursor: pointer;

    &:hover {
      button {
        color: ${({ theme }) => theme.colors.b100};
        background-color: ${({ theme }) => theme.colors.b0};
      }
    }

    button {
      pointer-events: none;
      ${sprinkles.circle("30px")};
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
