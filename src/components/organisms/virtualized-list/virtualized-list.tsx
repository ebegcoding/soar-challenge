import { useCallback, useLayoutEffect, useRef } from "react";
import {
  type StateSnapshot,
  Virtuoso,
  type VirtuosoHandle,
  type VirtuosoProps,
} from "react-virtuoso";
import { StyledItemContainer } from "./virtualized-list.styles";
import { useUpdateEffect } from "@/hooks/use-update-effect";

/**
 * Stores StateSnapshot instances, that are read and stored when a Virtuoso list is unmounted. This
 * allows to recover the scrolling position of any virtualized list.
 */
class StateStorage {
  private stateMap = new Map<string, StateSnapshot>();

  public store(key: string, value: StateSnapshot) {
    /**
     * There seems to be a bug when StateSnapshot has scrollTop === 0, where the position
     * is not restored correctly. To solve it, we will not store snapshots with this condition
     */
    if (value.scrollTop !== 0) {
      this.stateMap.set(key, value);
    } else {
      this.stateMap.delete(key);
    }
  }

  public load(key: string) {
    return this.stateMap.get(key);
  }
}

const STORAGE = new StateStorage();

export type VirtualizedListProps<D, C> = VirtuosoProps<D, C> & {
  stateKey?: string;
  gap?: string;
};

/**
 * # Considerations when implementing a virtualized list:
 *
 * - Memoize allways the `itemContent` callback using `React.useCallback`
 * - If the elements rendered within `itemContent` are expensive, memoize the component itslef using `React.memo`
 * - You can read more about it @ https://virtuoso.dev/#performance
 */
export function VirtualizedList<D, C>({
  stateKey,
  itemContent,
  gap,
  data,
  horizontalDirection,
  ...virtuosoProps
}: VirtualizedListProps<D, C>) {
  const internalRef = useRef<VirtuosoHandle>(null);
  useLayoutEffect(() => {
    if (stateKey) {
      return () => {
        if (internalRef.current) {
          internalRef.current.getState((state) =>
            STORAGE.store(stateKey, state)
          );
        }
      };
    }
  }, [stateKey]);

  /**
   * Render gaps
   *
   * In non-virtualized lists, rendering gaps can easily be achieved using flexbox.
   *
   * Virtualized lists are, a bit more complex. We cannot use flexbox, and using descendant selectors
   * have unwanted behaviors (the top most element changes while scorlling, causing a popping or
   * flickering behavior).
   *
   * The solution is to detect the top most element using the current index (which will have index 0).
   * However, even then, it's very easy to shoot ourselves: We MUST NOT use margins (https://virtuoso.dev/#gotchas)
   *
   * The solution is, then, to wrap the items and use padding instead! It's very important to
   * memoize the callback (https://virtuoso.dev/#performance)
   */

  const itemContentWrapped = useCallback(
    (index: number, data: D, context: C) => {
      const component = itemContent?.(index, data, context);
      return (
        <StyledItemContainer
          $gap={index !== 0 && gap ? gap : undefined}
          $horizontal={horizontalDirection}
        >
          {component}
        </StyledItemContainer>
      );
    },
    [gap, itemContent, horizontalDirection]
  );

  useUpdateEffect(() => {
    if (horizontalDirection) {
      internalRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      internalRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [JSON.stringify(data?.[0])]);

  if (!data || data.length === 0) {
    return null;
  }
  return (
    <Virtuoso
      ref={internalRef}
      horizontalDirection={horizontalDirection}
      restoreStateFrom={stateKey ? STORAGE.load(stateKey) : undefined}
      itemContent={itemContentWrapped}
      data={data}
      {...virtuosoProps}
    />
  );
}
