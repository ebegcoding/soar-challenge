import {
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
  useForm,
} from "react-hook-form";

import { type IsDirty, useIsDirty } from "./use-is-dirty";
import { useEffect } from "react";

export type UseExtendedFormReturn<
  TFieldsValues extends FieldValues = FieldValues,
  TContext extends object = object
> = UseFormReturn<TFieldsValues, TContext> & {
  isDirty: IsDirty<TFieldsValues>;
};

export function useExtendedForm<
  TFieldsValues extends FieldValues = FieldValues,
  TContext extends object = object
>(
  props: UseFormProps<TFieldsValues, TContext> & {
    updateOnDefaultValuesChange?: boolean;
  }
): UseExtendedFormReturn<TFieldsValues, TContext> {
  const form = useForm(props);
  const isDirty = useIsDirty({
    formState: form.formState,
    getFieldState: form.getFieldState,
  });

  useEffect(() => {
    if (
      props.updateOnDefaultValuesChange &&
      typeof props.defaultValues === "object" &&
      form.formState.isDirty
    ) {
      form.reset(props.defaultValues);
    }
  }, [JSON.stringify(props.defaultValues), props.updateOnDefaultValuesChange]);

  return {
    ...form,
    isDirty,
  };
}
