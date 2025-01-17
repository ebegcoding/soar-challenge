import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

type IsDirtyOpts<TFormValues extends FieldValues> = Pick<
  UseFormReturn<TFormValues>,
  "getFieldState" | "formState"
>;

export type IsDirty<TFormValues extends FieldValues> = (
  name?: FieldPath<TFormValues>
) => boolean;

/**
 * Creates a function that allows to check whether a specific path is dirty imperatively, without causing
 * extra re-renders.
 */
export function useIsDirty<TFormValues extends FieldValues>(
  opts: IsDirtyOpts<TFormValues>
): IsDirty<TFormValues> {
  //There seems to be a bug with react-hook-form. If we do not explicitly get isDirty from the formState proxy object, then it does
  //not compute it properly.
  opts.formState.isDirty;

  return (name?: FieldPath<TFormValues>) => {
    if (name) {
      return opts.getFieldState(name, opts.formState).isDirty;
    }
    return opts.formState.isDirty;
  };
}
