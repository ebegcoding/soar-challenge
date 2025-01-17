import { genericForwardRef } from "@/utils/react";

export const VirtualizedListFooter = genericForwardRef(
  <T extends { context?: { loading: boolean } }>(
    { context }: T,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    if (context?.loading) {
      return <div ref={ref}>Loading</div>;
    }
    return null;
  }
);
