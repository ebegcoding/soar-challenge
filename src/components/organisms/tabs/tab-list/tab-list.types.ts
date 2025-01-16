import { ButtonHTMLAttributes, ReactNode } from "react";

export type TabProps<T extends string> = {
  label: ReactNode;
  value: T;
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  onKeyDown?: ButtonHTMLAttributes<HTMLButtonElement>["onKeyDown"];
};

export type TabListProps<T extends string> = {
  data: TabProps<T>[];
};
