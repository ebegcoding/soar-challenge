import { FileInputProps } from "@/components/atoms";

export type ImageInputProps = Omit<
  FileInputProps<false>,
  | "accept"
  | "multiple"
  | "children"
  | "value"
  | "defaultValue"
  | "onChange"
  | "size"
> & {
  size: string;
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (value: string | null) => void;
};
