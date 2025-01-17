import styled from "styled-components";

export const StyledContainer = styled.div<{
  $withRightSection: boolean;
  $withLeftSection: boolean;
  $rightSectionWidth?: string;
  $leftSectionWidth?: string;
}>`
  --input-height: 40px;
  --input-border-color: var(
    --input-wrapper-border-color,
    ${({ theme }) => theme.colors.b50}
  );
  --input-text-color: var(
    --input-wrapper-text-color,
    ${({ theme }) => theme.colors.b50}
  );
  --section-left-size: ${(props) =>
    props.$withLeftSection &&
    (props.$leftSectionWidth ?? "var(--input-height)")};
  --section-right-size: ${(props) =>
    props.$withRightSection &&
    (props.$rightSectionWidth ?? "var(--input-height)")};

  position: relative;
`;

export const StyledSection = styled.div<{ $width?: string }>`
  --section-inset: 1px;
  &[data-position="right"] {
    --section-size: var(--section-right-size);
    --section-end: var(--section-inset);
  }
  &[data-position="left"] {
    --section-size: var(--section-left-size);
    --section-start: var(--section-inset);
  }

  position: absolute;
  z-index: 1;
  inset-inline-start: var(--section-start);
  inset-inline-end: var(--section-end);
  bottom: var(--section-inset);
  top: var(--section-inset);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--section-size);

  color: ${({ theme }) => theme.colors.b50};
`;

export const StyledInput = styled.input`
  height: var(--input-height);
  min-height: var(--input-height);
  border: 1px solid var(--input-border-color);
  color: var(--input-text-color);

  -webkit-tap-highlight-color: transparent;
  appearance: none;

  display: block;
  width: 100%;
  transition: border-color 200ms ease, color 200ms ease;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding-inline-start: var(--section-left-size, 16px);
  padding-inline-end: var(--section-right-size, 16px);
  padding-block: 12px;
  background-color: ${({ theme }) => theme.colors.b0};

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;
