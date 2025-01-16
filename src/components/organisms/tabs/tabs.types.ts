import { ReactNode } from "react";

export type TabsContext = {
  getId: (value: string, type: "tab" | "panel" | "list") => string;
  disabled?: boolean;
  active: string | null;
  onChange: (value: string) => void;
};

export type TabsProps<T extends string> = {
  id?: string;
  value?: T | null;
  defaultValue?: T | null;
  onChange?: (value: T | null) => void;
  disabled?: boolean;
  children: NonNullable<ReactNode>;
};
