import { HiddenInput } from "./input.styles";

interface FileInputOwnProps<Multiple extends boolean = false> {
  onChange: (payload: Multiple extends true ? File[] : File | null) => void;
  children: React.ReactNode;
  multiple?: Multiple;
  name: string;
}

export type FileInputProps<T extends boolean> = FileInputOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<"input">, keyof FileInputOwnProps<T>>;

export const FileInput = <T extends boolean>({
  name,
  onChange,
  multiple,
  children,
  ...props
}: FileInputProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (multiple) {
      onChange(Array.from(event.currentTarget!.files!) as any);
    } else {
      onChange((event.currentTarget!.files![0] || null) as any);
    }
  };

  const labelId = `${name}-label`;

  return (
    <>
      <HiddenInput
        aria-describedby={labelId}
        type="file"
        multiple={multiple}
        onChange={handleChange}
        name={name}
        id={name}
        {...props}
      />
      <label id={labelId} htmlFor={name}>
        {children}
      </label>
    </>
  );
};
