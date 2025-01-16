import { useEffect, useRef, useState } from "react";

type MediaQueryCallback = (event: { matches: boolean; media: string }) => void;

/**
 * Older versions of Safari (shipped withCatalina and before) do not support addEventListener on matchMedia
 * https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
 * */
function attachMediaListener(
  query: MediaQueryList,
  callback: MediaQueryCallback
) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      return window.matchMedia(query).matches;
    }

    return false;
  });

  const queryRef = useRef<MediaQueryList>(null);

  useEffect(() => {
    if ("matchMedia" in window) {
      // @ts-ignore
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) =>
        setMatches(event.matches)
      );
    }

    return undefined;
  }, [query]);

  return matches;
}
