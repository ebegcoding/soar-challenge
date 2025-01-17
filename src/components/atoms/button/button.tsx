import { StyledButton } from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button = ({ children, icon: Icon, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {children}
      {Icon && <Icon size={24} />}
    </StyledButton>
  );
};
