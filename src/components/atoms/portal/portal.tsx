import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

export const Portal = ({
  children,
  target,
}: {
  children: NonNullable<ReactNode>;
  target: HTMLElement | string;
}) => {
  const nodeRef = useRef(
    typeof target === "string" ? document.querySelector(target) : target
  );

  if (!nodeRef.current) {
    return null;
  }

  return createPortal(children, nodeRef.current);
};
