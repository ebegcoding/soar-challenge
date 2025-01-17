import { forwardRef } from "react";
import { StyledContainer, StyledInput, StyledSection } from "./input.styles";
import { InputProps } from "./input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      leftSection,
      leftSectionWidth,
      rightSection,
      rightSectionWidth,
      error,
      labelId,
      ...props
    },
    ref
  ) => {
    return (
      <StyledContainer
        $withLeftSection={!!leftSection}
        $withRightSection={!!rightSection}
        $leftSectionWidth={leftSectionWidth}
        $rightSectionWidth={rightSectionWidth}
      >
        {leftSection && (
          <StyledSection $width={leftSectionWidth} data-position="left">
            {leftSection}
          </StyledSection>
        )}
        <StyledInput
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={labelId}
          {...props}
        />
        {rightSection && (
          <StyledSection $width={rightSectionWidth} data-position="right">
            {rightSection}
          </StyledSection>
        )}
      </StyledContainer>
    );
  }
);
