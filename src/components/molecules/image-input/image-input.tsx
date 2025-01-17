import { Avatar, Button, FileInput } from "@/components/atoms";
import { ImageInputProps } from "./image-input.types";
import { useUncontrolled } from "@/hooks/use-uncontrolled";
import { IconEdit } from "@tabler/icons-react";
import { StyledContainer } from "./image-input.styles";

export const ImageInput = ({
  size,
  value,
  defaultValue,
  onChange,
  ...props
}: ImageInputProps) => {
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    onChange,
    finalValue: null,
  });

  const handleFileChange = (file: File | null) => {
    if (file) {
      handleChange(URL.createObjectURL(file));
    }
  };

  return (
    <StyledContainer>
      <Avatar size={size} src={_value ?? undefined} />
      <FileInput
        onChange={handleFileChange}
        accept="image/*"
        multiple={false}
        {...props}
      >
        <Button
          disabled={props.disabled}
          tabIndex={-1}
          type="button"
          icon={IconEdit}
        />
      </FileInput>
    </StyledContainer>
  );
};
