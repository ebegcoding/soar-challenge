import { ReactNode } from "react";
import { StyledContainer } from "./avatar.styles";
import { AvatarProps } from "./avatar.types";
import { IconUser } from "@tabler/icons-react";

export const Avatar = ({ size, src, username }: AvatarProps) => {
  let content: ReactNode = <IconUser />;

  if (src) {
    content = null;
  } else if (username) {
    content = username
      .split(" ")
      .map((item) => item.charAt(0))
      .join("");
  }

  return (
    <StyledContainer $size={size} $src={src}>
      <span>{content}</span>
    </StyledContainer>
  );
};
