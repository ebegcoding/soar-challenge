import { FieldValues, UseControllerProps } from "react-hook-form";

type FormItemOwnProps<
  T extends FieldValues,
  E extends React.ElementType
> = UseControllerProps<T> & {
  component: E;
  label?: string;
};

export type FormItemProps<
  T extends FieldValues,
  E extends React.ElementType
> = FormItemOwnProps<T, E> &
  Omit<
    React.ComponentProps<E>,
    keyof FormItemOwnProps<T, E> | "value" | "error"
  >;
