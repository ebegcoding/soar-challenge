import styled from "styled-components";
import { AppShell } from "../app-shell";
import { UnstyledButton } from "@/components/atoms";
import { sprinkles } from "@/theme/sprinkles";

export const StyledContainer = styled(AppShell.Header)`
  padding: 20px;
  display: grid;
  align-items: center;
  grid-template-areas: "title search actions";
  grid-template-columns: 1fr minmax(100px, 255px) auto;
  column-gap: 30px;
  row-gap: 20px;

  @media screen and ${sprinkles.smallerThan("tablet")} {
    grid-template-areas: "title actions" "search search";
    grid-template-columns: 1fr auto;
  }
`;

export const StyledTitleContainer = styled.div`
  grid-area: title;

  @media screen and ${sprinkles.smallerThan("tablet")} {
    padding-inline-start: var(--app-shell-navbar-toggle-size);
    text-align: center;
  }
`;

export const StyledSearch = styled.div`
  grid-area: search;

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
`;

export const StyledActions = styled.div`
  grid-area: actions;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const StyledButton = styled(UnstyledButton)`
  ${sprinkles.circle("50px")};
  background-color: ${({ theme }) => theme.colors.b10};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${sprinkles.smallerThan("tablet")} {
    display: none;
  }
`;
