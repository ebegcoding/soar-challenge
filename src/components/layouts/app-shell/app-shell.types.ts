import { CSSProperties, ReactNode } from "react";

export type AppShellProps = {
  borderColor?: CSSProperties["borderColor"];
  header?: { height: CSSProperties["height"] };
  navbar?: { width: CSSProperties["width"] };
  padding?: {
    x?: CSSProperties["paddingInline"];
    y?: CSSProperties["paddingBlock"];
  };
  zIndex?: number;
  background?: CSSProperties["color"];
  children: NonNullable<ReactNode>;
};

export type AppShellStyledProps = {
  borderColor?: CSSProperties["borderColor"];
  headerHeight: CSSProperties["height"];
  navbarWidth: CSSProperties["width"];
  padding: {
    x: CSSProperties["paddingInline"];
    y: CSSProperties["paddingBlock"];
  };
  zIndex: number;
  background?: CSSProperties["color"];
};
