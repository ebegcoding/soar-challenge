import { CSSProperties, ReactNode } from "react";

export type AppShellProps = {
  borderColor?: CSSProperties["borderColor"];
  header?: {
    height: CSSProperties["height"];
    padding?: {
      x?: CSSProperties["paddingInline"];
      y?: CSSProperties["paddingBlock"];
    };
  };
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
  $borderColor?: CSSProperties["borderColor"];
  $headerHeight: CSSProperties["height"];
  $headerPadding: {
    x: CSSProperties["paddingInline"];
    y: CSSProperties["paddingBlock"];
  };
  $navbarWidth: CSSProperties["width"];
  $padding: {
    x: CSSProperties["paddingInline"];
    y: CSSProperties["paddingBlock"];
  };
  $zIndex: number;
  $background?: CSSProperties["color"];
};
