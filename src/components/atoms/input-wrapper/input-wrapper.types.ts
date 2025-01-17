import { ReactElement } from "react";

export type InputWrapperProps = {
  id: string;
  label?: string;
  error?: string | boolean;
  children: ReactElement<{ id: string; error: boolean; labelId: string }>;
};
