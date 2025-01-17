import { TablerIcon } from "@tabler/icons-react";
import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: TablerIcon;
};
