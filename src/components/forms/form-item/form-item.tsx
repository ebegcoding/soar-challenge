import { FieldValues, useController } from "react-hook-form";
import { FormItemProps } from "./form-item.types";
import { InputWrapper } from "@/components/atoms/input-wrapper";

export function FormItem<T extends FieldValues, E extends React.ElementType>({
  component: Component,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  label,
  ...rest
}: FormItemProps<T, E>) {
  const {
    field: { value, onChange: fieldOnChange, ref, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <InputWrapper id={name} error={fieldState.error?.message} label={label}>
      {/* @ts-ignore */}
      <Component
        //   @ts-ignore
        onChange={(e) => {
          fieldOnChange(e);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          onChange?.(e);
        }}
        value={value}
        {...field}
        {...rest}
      />
    </InputWrapper>
  );
}
