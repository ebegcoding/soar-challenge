import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => `
    html {
        background-color: ${theme.colors.b10} !important;
    }

    *,
    ::before,
    ::after {
        box-sizing: border-box;
        outline-offset: 2px;
    }

    #root {
        width:100%;
    }

    *:focus-visible {
        outline: 2px solid ${theme.colors.b50} !important;
    }

    body {
        background-color: ${theme.colors.b10};
        color: ${theme.colors.b90};
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: ${theme.font.weights.medium};
    }

    a {
        text-decoration: none;
    }

    *[disabled] {
        color: ${theme.colors.b0};
        background-color: ${theme.colors.dimmed};
        -webkit-text-fill-color:${theme.colors.b0};
        cursor: not-allowed !important;
        border: none;

        svg {
            stroke: ${theme.colors.b0};
        }
    }

    h1 {
        margin: 0;
        font-size: 28px;
        line-height: 34px;
        font-weight: ${theme.font.weights.bold};
    }

     h2 {
        margin: 0;
        font-size: 22px;
        line-height: 27px;
        font-weight: ${theme.font.weights.bold};
    }

    label {
        font-size: 16px;
        line-height: 20px;
        font-weight: ${theme.font.weights.light};
        color: ${theme.colors.b100};
    }

    input {
        font-size: 15px;
        line-height: 18px;
        font-weight: ${theme.font.weights.light};

        &::placeholder {
            color: ${theme.colors.b10};
            -webkit-text-fill-color: ${theme.colors.b10};
        }
    }

    button:focus {
        outline: none;
    }
`
);
