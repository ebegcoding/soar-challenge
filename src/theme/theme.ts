export const theme = {
  colors: {
    b100: "#232323",
    b90: "#343C6A",
    b50: "#718EBF",
    b30: "#E6EFF5",
    b10: "#F5F7FA",
    b0: "#FFFFFF",
    dimmed: "#B1B1B1",
    border: "#DFEAF2",
    success: "#41D4A8",
    error: "#FF4B4A",
    accent: "#396AFF",
  },
  font: {
    weights: {
      bold: 600,
      medium: 500,
      light: 400,
    },
  },
  radius: {
    lg: "40px",
    md: "25px",
    sm: "15px",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
} as const;

export type Theme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
