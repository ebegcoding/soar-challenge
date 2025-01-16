import { theme, Theme } from "@/theme/theme";
import { useMediaQuery } from "./use-media-query";
import { sprinkles } from "@/theme/sprinkles";

type Breakpoint = keyof Theme["breakpoints"];

type ResponsiveValue<T> = Partial<Record<Breakpoint | "base", T>>;

const BREAKPOINTS: Breakpoint[] = ["mobile", "tablet", "desktop"];

function getFirstMatchingValue<T>(
  value: ResponsiveValue<T>,
  biggestMatch: Breakpoint | undefined
): T {
  if (!biggestMatch) {
    return value.base!;
  }

  let index = BREAKPOINTS.indexOf(biggestMatch);

  while (index >= 0) {
    if (BREAKPOINTS[index] in value) {
      return value[BREAKPOINTS[index]]!;
    }
    index -= 1;
  }

  return value.base!;
}

const findLastIndex = <T>(array: T[], callback: (item: T) => boolean) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
};

export function useResponsiveValue<T>(payload: ResponsiveValue<T>) {
  const mobileMatches = useMediaQuery(
    sprinkles.biggerThan("mobile")({ theme })
  );
  const tabletMatches = useMediaQuery(
    sprinkles.biggerThan("tablet")({ theme })
  );
  const desktopMatches = useMediaQuery(
    sprinkles.biggerThan("desktop")({ theme })
  );

  const breakpoints = [mobileMatches, tabletMatches, desktopMatches];
  const firstMatchingBreakpointIndex = findLastIndex(
    breakpoints,
    (item) => item
  );
  return getFirstMatchingValue(
    payload,
    BREAKPOINTS[firstMatchingBreakpointIndex]
  );
}
