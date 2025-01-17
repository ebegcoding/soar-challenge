import { IconCalendar } from "@tabler/icons-react";
import { Input } from "./input";
import { InputProps } from "./input.types";
import { useRef } from "react";
import { UnstyledButton } from "../button";

export const DateInput = (props: Omit<InputProps, "rightSection" | "type">) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      ref={inputRef}
      {...props}
      type="date"
      rightSection={
        <UnstyledButton
          type="button"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.showPicker();
            }
          }}
        >
          <IconCalendar />
        </UnstyledButton>
      }
    />
  );
};
