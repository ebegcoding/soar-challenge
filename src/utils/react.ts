import { forwardRef } from "react";

type GenericForwardRef = <T, P = Record<string, never>>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;
export const genericForwardRef = forwardRef as GenericForwardRef;
