import { css } from "styled-components";
import { Theme } from "./theme";

export const sprinkles = {
  border: ({ theme }: { theme: Theme }) => `1px solid ${theme.colors.border}`,
  circle: (size: string) =>
    css`
      height: ${size};
      width: ${size};
      border-radius: ${size};
      flex-shrink: 0;
    `,
  smallerThan:
    (breakpoint: keyof Theme["breakpoints"]) =>
    ({ theme }: { theme: Theme }) =>
      `(max-width: ${theme.breakpoints[breakpoint]})`,
  biggerThan:
    (breakpoint: keyof Theme["breakpoints"]) =>
    ({ theme }: { theme: Theme }) =>
      `(min-width: ${theme.breakpoints[breakpoint]})`,
};
