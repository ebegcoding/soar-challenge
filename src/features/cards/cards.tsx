import { useFetchMore } from "@/hooks/use-fetch-more";
import { useGetCardsQuery } from "./cards.slice";
import { forwardRef, useCallback } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { CreditCard, VirtualizedListFooter } from "@/components/organisms";

export const Cards = () => {
  const [limit, setLimit] = useFetchMore(12);

  const { data = [], isFetching } = useGetCardsQuery({ limit });

  const handleFetchMore = useCallback(() => {
    setLimit(data.length);
  }, [data.length]);

  return (
    <VirtuosoGrid
      context={{ loading: isFetching }}
      useWindowScroll
      data={data}
      endReached={handleFetchMore}
      components={{
        Footer: VirtualizedListFooter,
        List: forwardRef(({ style, children, ...props }, ref) => (
          <div
            ref={ref}
            {...props}
            style={{
              display: "flex",
              flexWrap: "wrap",
              ...style,
            }}
          >
            {children}
          </div>
        )),
      }}
      itemContent={(_index, data) => (
        <div style={{ padding: "4px" }}>
          <CreditCard {...data} />
        </div>
      )}
    />
  );
};
