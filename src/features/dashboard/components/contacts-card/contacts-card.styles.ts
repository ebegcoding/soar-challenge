import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and ${sprinkles.smallerThan("mobile")} {
    gap: 20px;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 25px;
  row-gap: 15px;

  > label {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.font.weights.light};
    line-height: 20px;
    color: ${({ theme }) => theme.colors.b50};
    margin: 0;
  }

  > div {
    width: 100%;
  }

  input {
    height: 50px;
    background-color: ${({ theme }) => theme.colors.b10};
    border: none;
    border-radius: ${({ theme }) => theme.radius.lg};

    &::placeholder {
      color: ${({ theme }) => theme.colors.b50};
      -webkit-text-fill-color: ${({ theme }) => theme.colors.b50};
    }

    @media screen and ${sprinkles.smallerThan("tablet")} {
      height: 40px;
    }
  }

  button {
    border-radius: ${({ theme }) => theme.radius.lg};

    @media screen and ${sprinkles.smallerThan("tablet")} {
      svg {
        max-width: 14px;
        max-height: 14px;
      }
    }
  }
`;
