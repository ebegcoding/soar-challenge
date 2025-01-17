import { cloneElement } from "react";
import { StyledContainer, StyledError } from "./input-wrapper.styles";
import { InputWrapperProps } from "./input-wrapper.types";

export const InputWrapper = ({
  label,
  error,
  id,
  children,
}: InputWrapperProps) => {
  const hasError = typeof error === "string" && error.trim().length > 0;

  const labelId = `${id}-label`;

  return (
    <StyledContainer $error={!!error}>
      {label && (
        <label id={labelId} htmlFor={id}>
          {label}
        </label>
      )}
      {cloneElement(children, { id, error: hasError, labelId })}
      {hasError && <StyledError>{error}</StyledError>}
    </StyledContainer>
  );
};
