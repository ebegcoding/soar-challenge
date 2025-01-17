import { InputHTMLAttributes, ReactNode } from "react";

export type InputProps = {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  leftSectionWidth?: string;
  rightSectionWidth?: string;
  error?: boolean;
  labelId?: string;
} & InputHTMLAttributes<HTMLInputElement>;
