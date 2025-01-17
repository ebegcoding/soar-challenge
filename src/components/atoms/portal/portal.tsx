import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({
  children,
  target,
}: {
  children: NonNullable<ReactNode>;
  target: HTMLElement | string;
}) => {
  const [node, setNode] = useState<Element | null>(null);

  useEffect(() => {
    if (typeof target === "string") {
      setNode(document.querySelector(target));
    } else {
      setNode(target);
    }
  }, [target]);

  if (!node) {
    return null;
  }

  return createPortal(children, node);
};
