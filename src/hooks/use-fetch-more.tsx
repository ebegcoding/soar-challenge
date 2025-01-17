import { useCallback, useState } from "react";

export const useFetchMore = (defaultLimit: number) => {
  const [limit, setLimit] = useState(defaultLimit);

  const handleFetchMore = useCallback(
    (total: number) => {
      setLimit((p) => {
        if (p <= total) {
          return p + defaultLimit;
        }

        return p;
      });
    },
    [defaultLimit]
  );

  return [limit, handleFetchMore] as const;
};
